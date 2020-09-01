#!/usr/bin/python3
# -*- coding: utf-8 -*-

# Reinan B. 12:49 31/08/2020

from flask import Flask, request, render_template, jsonify 
from flask_bootstrap import Bootstrap
from flask import send_from_directory
import os

from Tools import api_news
#criando o app
app = Flask(__name__,static_url_path='/static',template_folder='templates',static_folder='static')

bootstrap = Bootstrap(app)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

#criando as rotas desse app
@app.route('/',methods=['GET'])
#criando a função dessa rota
def index():
  #pegando o ip do usuario
  
  user = {}
  user['ip'] = request.remote_addr
  print(request)
  user['browser'] = request.user_agent.browser
  print(f'o [{user["ip"]}] abriu a sua pagina,.')
  #enviar a pagina q o usuario
  return render_template('index.html', user=user)
  

@app.route('/api')
def api():
  return render_template('api.html')
  
@app.route('/ex')
def example():
  return render_template('example.html')
    
@app.route('/sobre')
def about():
  return render_template('about.html')
  

@app.route('/noticias')
def news():
  api_not = api_news.get_news()
  return render_template('noticias.html',api_news=api_not)

  
@app.route('/eventos')
def event():
  return render_template('eventos.html')

'''
@app.route('api/email_cadastrer/', methods=['GET'])
def api_email_cadastrer():
  return True
 
 ''' 

@app.route('/email')
def email():
  return render_template('email.html')
  

@app.route('/covid')
def covid():
  import covid_api
  return render_template('covid19.html')
  
 #caso o app esteje em servidor, ele roda 
app.run(host='0.0.0.0',port=5000,debug=True)
