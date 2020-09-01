from datetime import datetime

d_ = datetime.now().strftime('%Y-%M-%d')

def get_news(q='astronomia',dat=d_):
  import requests as rq 
  import json 
  _api = rq.get(f'http://newsapi.org/v2/everything?q={q}&from={dat}&sortBy=publishedAt&apiKey=ed82e8572df841fdab2e02734dac83ee')
  _data = json.loads(_api.content)
  _sources = _data['articles']
  list_sources = []
  for sources in _sources:
    source = {}
    print(sources)
    print(f'[autor] \n {sources["author"]}')
    print(f'conteudo \n {sources["content"]}' )
    print(f' title \n {sources["title"]}')
    print(f' data \n {sources["publishedAt"]}')
  
    nZ = sources['publishedAt'].find('Z')
    nT = sources['publishedAt'].find('T')
    data = sources['publishedAt'][0:nT]
    hora = sources['publishedAt'][nT+1:nZ]
  
    source['autor'] = sources['author']
    source['content'] = sources['content']
    source['title'] = sources['title']
    source['date'] = data
    source['hora'] = hora
    source['link'] = sources['url']
    source['urlImage']=sources['urlToImage']
    list_sources.append(source)
  return list_sources
    
    
    
print(get_news())
'''
for v,k in get_news().itens():
  print(f'noticia {v} :||: content {k}')
'''
  