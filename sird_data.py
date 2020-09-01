import matplotlib.pyplot as plt 
import numpy as np 
import scipy 
import mechanicalsoup as ms_


def get_io_data_covid(file_name='petrolina_covid',city="Petrolina",state="PE",type_file='csv'):
  import mechanicalsoup

#declarations importantes
  userAgent = 'Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 QQ-URL-Manager Mobile Safari/537.36'

  http = 'http://144.217.161.146:8080'

  https = 'https://50.237.232.151:1080'


#modifica os proxys de user
  br = mechanicalsoup.StatefulBrowser()
#br.session.proxies = {"http":http,"https":https} 
#br.session.proxies.update({"http":http,"https":https})

  puts('modificando os agentes')
#modifica os agentes de user
  br.session.headers = {"User-Agent":userAgent} #
  br.session.headers.update({"User-Agent":userAgent }) #Proxy

  puts('trolando o IO.Brasil, kkk...')
# abre o site
  res = br.session.get(f'https://brasil.io/dataset/covid19/caso_full/?state={state}&city={city}&format={type_file}')

#salva os status da pagina
  res.raise_for_status()
#verifica os form da pagina
  puts('IO.Brasil trolado, kkkk.')

  with open(f'{file_name}.{type_file}', 'wb') as file:
	  puts(f'salvando {file_name}')
	  file.write(str(res.content))
	  puts(f'{file_name} salvo')
	  

  puts('lendo os dados salvos para plotagem e excel')
  covid_frames = pd.read_csv(f'{file_name}.{type_file}',sep=',')
  
  
  


