import mechanicalsoup

## -*- coding: utf-8 -*-
#declarationsimportantes
userAgent = 'Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 QQ-URL-Manager Mobile Safari/537.36'

http = 'http://144.217.161.146:8080'

https = 'https://50.237.232.151:1080'

#modifica os proxys de user
br = mechanicalsoup.StatefulBrowser()
#br.session.proxies = {"http":http,"https":https} 
#br.session.proxies.update({"http":http,"https":https})

print('modificando os agentes')
#modifica os agentes de user
br.session.headers = {"User-Agent":userAgent} #
br.session.headers.update({"User-Agent":userAgent }) #Proxy

print('abrindo site')
# abre o site
res = br.session.get('https://brasil.io/dataset/covid19/caso_full/?state=PE&city=Petrolina&format=csv')

#salva os status da pagina
res.raise_for_status()
#verifica os form da pagina
print(res.content)

with open('petrolina.csv', 'wb') as file:
	print('salvando arquivo')
	file.write((res.content))
	print('arquivo salvo')
	

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
from scipy.optimize import curve_fit

covid_petrolina = pd.read_csv('petrolina.csv',sep=',')
#print(covid_petrolina)

#criando excel

covid_petrolina.to_excel('covid_petro.xlsx')

#pegando os confirmados, mortos, casos p/ dia, mortes p/ dia

def taxa_sem(df):
    s = 0
    t = 0
    size = [0]
    vzs = 0
    t_s = [0]
    for i in df:
        t += i
        s += 1
        if s==6:
            t_s.append(t/6)
            size.append(int(vzs))
            t=0
            s=0
            vzs += 1
#    print(t_s,size)
    return t_s,size
    





city = 'Petrolina'
confirmados = covid_petrolina['last_available_confirmed']
confirmados = np.array(confirmados)[::-1]
mortos = np.array(covid_petrolina['last_available_deaths'])[::-1]
confirmados_dia = np.array(covid_petrolina['new_confirmed'])[::-1]
mortos_dia = np.array(covid_petrolina['new_deaths'])[::-1]
data = np.array(covid_petrolina['date'])[::-1]


def moving_average(a, n=3) :
    ret = np.cumsum(a, dtype=float)
    ret[n:] = ret[n:] - ret[:-n]
    return ret[n - 1:] / n


size = len(confirmados_dia)
t = np.linspace(0,size,size)

taxa_semanal,s = taxa_sem(confirmados_dia)

#s = np.linspace(0,len(taxa_semanal),len(taxa_semanal))

#plt.plot(s,taxa_semanal,c='black',label='taxa semanal')
plt.legend()
plt.grid()
plt.xlabel('semana epdemiologica')
plt.ylabel('casos confirmados')
plt.title(f'evolução covid-19 semana epidemiológica em {city}')
#plt.savefig('static/dados/semanas.png',dpi=900)
#plt.show()



media = moving_average(confirmados_dia,n=7)
s=np.linspace(0,len(media),len(media))

plt.plot(s,media,c='black',label='media móvel semanal',linewidth=.7)
plt.bar(t,confirmados_dia,label='casos confirmados diarios')
#ax = covid_petrolina[['date','new_confirmed']].plot(kind='bar')
plt.bar(t,mortos_dia,label='mortes diarias')
plt.legend()
plt.ylabel('numero de casos')
plt.xlabel('periodo de dias')
plt.title(f'evolução covid-19 média movel semanal em {city}')
plt.savefig('static/dados/semana.png',dpi=900)
#plt.show()


from scipy import integrate, optimize

N = 320_000

y = confirmados
x = np.linspace(0,len(y),len(y))


def sir_model(y, x, beta, gamma):
    S = -beta * y[0] * y[1] / N
    R = gamma * y[1]
    I = y[0]*y[1]*beta/N - y[1]*gamma
    C = R+I
    return S, I, R, C



def SIRD_( init, time, beta,gama,d):
		
		#equações do modelo SIRD
	S, I, R, D = init
	
	dSdt = -r*S*I
	dIdt = r*S*I - (a+d)*I
	dRdt = a*I
	dDdt = d*I
	
	return (dSdt,dIdt,dRdt,dDdt)
		



def fit_odeint(x, beta, gamma):
    return integrate.odeint(sir_model, (S0, I0, R0,C0), x, args=(beta, gamma))[:,3]

#primeiro beta

N = 320_000
I0 = y[0]
S0 = N - I0
R0 = 0
C0 = R0+I0

#real
plt.plot(x, y, '-o',label="casos confirmados")
plt.plot(t,mortos,label='mortes')
plt.legend()
plt.savefig('static/dados/casos.png',dpi=900)
#plt.show()
s=x
x=np.linspace(0,len(x)+20,len(x)+20)

popt, pcov = optimize.curve_fit(fit_odeint, x[:85], y[:85])
fitted_1 = fit_odeint(x, *popt)

def fit_(x, beta, gamma):
    return integrate.odeint(sir_model, (S0, I0, R0,C0), x, args=(beta, gamma))

sir = fit_(x,*popt)

beta, gama = popt

plt.plot(x,fitted_1,'k:',c='green',label=f'primeira curva [β={round(beta,3)},.γ={round(gama,3)}]')


#segunda curva


N = 320_000
I0 = y[85]
S0 = N - I0
R0 = 50
C0 = R0+I0

#real
#plt.plot(x, y, '-o',label="real")

#x=np.linspace(0,len(x)+20,len(x)+20)

popt, pcov = optimize.curve_fit(fit_odeint, x[85:128], y[85:128])
fitted_2 = fit_odeint(x[85:], *popt)

def fit_(x, beta, gamma):
    return integrate.odeint(sir_model, (S0, I0, R0,C0), x, args=(beta, gamma))

sir = fit_(x,*popt)

beta, gama = popt

plt.plot(x[85:],fitted_2,'k:',c='orange',label=f'segunda curva [β={round(beta,3)},.γ={round(gama,3)}]')







#terceiro beta


N = 345_000
I0 = y[128]
S0 = N - I0
R0 = 100
C0 = R0+I0

#real
#plt.plot(x, y, '-o',label="real")

#x=np.linspace(0,len(x)+20,len(x)+20)
s = np.linspace(0,len(y),len(y))
popt, pcov = optimize.curve_fit(fit_odeint, s[128:], y[128:])
fitted_3 = fit_odeint(x[128:], *popt)

def fit_(x, beta, gamma):
    return integrate.odeint(sir_model, (S0, I0, R0,C0), x, args=(beta, gamma))

sir = fit_(x,*popt)

beta, gama = popt

plt.plot(x[128:],fitted_3,'k:',c='red',label=f'terceira curva [β={round(beta,3)},.γ={round(gama,3)}]')






#print(sir)

beta, gama = popt

#plt.plot(x, sir[:,1],label='infectados')
#plt.plot(x,sir[:,2],label='recuperados')
plt.title(f'modelando os casos casos covid-19 em {city}')
#plt.plot(x, fitted,'-',label=f'fitado confirmados (beta:{round(beta,3)}, gama:{round(gama,3)})')
plt.legend()
plt.savefig(f'static/dados/modeling.png',dpi=900)
#plt.show()


