const listMovies = [{nome:"Interstellar",
              image:'/static/Interstellar.png',
              href:'https://drive.google.com/file/d/1vaSLkKy6e4Mv10ng0JLMQf2qx7IMgV95/view?usp=drivesdk'
              },
              {nome:'Apolo 13',
              image:'/static/apollo13.png',
              href:'https://drive.google.com/file/d/1tOjcVneVk8TgYdWTZfrla8vZ1LNyfJ8N/view?usp=drivesdk'
              },
              {nome:'2001: uma Odisseia no Espaço',
                image:'static/2001.png',
                href:'https://drive.google.com/file/d/1cc_4vdNeSEwLYxhqawLQgE8KJR5gpAWK/view?usp=drivesdk'
              },
              {nome:'Gravidade',
                image:'/static/gravidade.png',
                href:'https://drive.google.com/file/d/1_hTWDOloSM5LlCRcRV-FNVSVJ9Ms9DqY/view?usp=drivesdk'
              },
              {nome:'O Primeiro Homem',
                image:'/static/first.png',
                href:'https://drive.google.com/file/d/14leU7yl1rqVXJs4USZMMpKTzaAMSI1Dj/view?usp=drivesdk'
              }]

const listApp = [{nome:'Stellarium+',
                  image:'/static/stellarium.png',
                  href:'https://drive.google.com/file/d/15FFeyXP7lpg7-58gL1UZqtrNb5y4OzoS/view?usp=drivesdk'
}]

listEvents = [{nome:'esperando o fim da Pandemia',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKVSBc_f7lKxXlkEpcKESfhhzSXTYOknLYlnt8N1rziqK5EQi-&usqp=CAU',
  href:'https://www.google.com/search?client=ms-android-motorola-rev2&sxsrf=ALeKk01fgDVdzY8UAsx2MC8GSbh2HRLASQ%3A1589673856594&ei=gH_AXq7EI6Cu5OUPn9axsAc&q=covid+fim+da+pandemia&oq=covid+fim&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAEYATIECCMQJzIFCAAQgwEyAggAMgIIADIHCAAQChDLATIGCAAQCBAeMgYIABAIEB4yBggAEAgQHlAAWABg3x9oAHAAeACAAZkCiAGZApIBAzItMZgBAA&sclient=mobile-gws-wiz-serp'
}]

console.log('estou aqui')
painelAttr = (attr,type) => {
  $('#painelAttr').fadeOut()
  $('#painelAttr').html('')
  $('#tit').text(type)
  for(i of attr){
    let p = `<h4>${i.nome}</h4><hr><img src='${i.image}' width=200 height=250><br><button><a href=${i.href}>abrir</a></button><br><hr>`
    $('#painelAttr').append(p)
  }
  $('#painelAttr').fadeIn()
}


$('#filmes').click(function(){
  print('filmes')
  painelAttr(listMovies,'Filmes')
})

$('#app').click(function(){
  print('app')
  painelAttr(listApp,'Aplicativos')
})


listCuriosits = [{nome:'Estrela Queima?',
                  image:'/static/starFire.png',
                  text:' Segundo o professor, elas não possuem fogo comum, como estamos acostumados aqui na Terra.<br>                Trata - se de fusões termonucleares que ocorrem no interior do Sol e das estrelas, onde matéria é convertida em energia.“No caso da estrela Sol, a cada segundo, cerca de quatro milhões de toneladas de matéria são convertidas em energia!”,'
                },
                {nome:'como funciona a velocidade da luz?',
                  image:'/static/luz.png',
                  text:'A luz viaja no vácuo a uma velocidade de cerca de 300 mil quilômetros por segundo.A lua está a cerca de 384 mil quilômetros da Terra, então, isto significa que a luz dela leva um pouquinho mais do que um segundo para chegar até os nossos olhos. <br> Já o Sol está, em média, a uma distância de 150 milhões de quilômetro da Terra.Portanto, a luz emitida pelo Sol leva um mais do que oito minutos para viajar toda essa distância e chegar no seu olho! <br> Se você viajasse na velocidade da luz, você poderia dar cerca de sete voltas em torno da Terra em apenas um segundo.Uma viagem de São Paulo a Nova York duraria 0, 03 segundos, isso quer dizer que estaríamos em outro país antes mesmo de piscar os olhos.'
                },
                {}]

painelAtt = (attr,type) => {
  $('#painelAttr').fadeOut()
  $('#painelAttr').html('')
  $('#tit').text(type)
  for (i of attr) {
    let p = `<h4>${i.nome}</h4><hr><img src='${i.image}' width=200 height=250><br><small>${i.text}</small><br><hr>`
    $('#painelAttr').append(p)
  }
  $('#painelAttr').fadeIn()
}

$('#eventos').click(function(){
  painelAttr(listEvents,'Eventos')
})

$('#curiosits').click(function(){
  //print('')
  painelAtt(listCuriosits,'Curiosidades')
})