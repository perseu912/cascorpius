const listMusic_1= [{artista:'Eminem',
                    musica:'The Real Slim Shady',
                    src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Eminem/Eminem%20'The%20Real%20Slim%20Shady'.mp3"},
                    {artista:'Michael Jackson',
                      musica:'Beat it',
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Michael%20Jackson/Michael%20Jackson%20'Billie%20Jean'.mp3"
                    },
                    {artista:'Era',
                      musica:'Ameno',
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Era/Era%20'Ameno'.mp3"
                    },
                    {artista:'AC/DC',
                      musica:'Big Gun',
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/ACDC/ACDC%20'Big%20Gun'.mp3"
                    },
                    {artista:"Beatles",
                      musica:"Let it Be",
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Beatles/14%20Let%20It%20Be/The%20Beatles%20-%20Let%20It%20Be%20-%2006%20Let%20It%20Be.mp3"
                    },
                    {artista:"beatles",
                      musica:"Yesterday",
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Beatles/05%20Help!/The%20Beatles%20-%20Help!%20-%2013%20Yesterday.mp3"
                    },
                    {artista:"Nirvana",
                      musica:"Lithium",
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Nirvana/Nirvana%20'Lithium'.mp3"
                    },
                
                    {artista:"Oasis",
                      musica:"Stop Crying Your Heart",
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Oasis/Oasis%20'Stop%20Crying%20Your%20Hear%20Out'.mp3"
                    },
                    {artista:"Scorpions",
                      musica:"Send My Angel",
                      src:"http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Scorpions/Scorpions%20'Send%20Me%20An%20Angel'.mp3"
                    }]
                    
const listMusic_2 = [{artista:"Pink Floid",
                musica:'Kashimr',
                src:"https://www.sinj.com/sounds/mp3s/Led%20Zepplin%20-%20Kashmir.mp3"
                    },
                    {src:"https://www.sinj.com/sounds/mp3s/Classical/Carl%20Orff%20-%20Carmina%20Burana%20-%20O%20Fortuna.mp3",
                      artista:'Carmina Burana',
                      musica:"Fortuna"
                    },
                    {src:"https://www.sinj.com/sounds/mp3s/Classical/Beetoven%20-%20Moonlight%20Sonata.MP3",
                      artista:"Beethoven",
                      musica:"Moonlight Sonata"
                    },
                    {src:"https://www.sinj.com/sounds/mp3s/Classical/Beethoven-%20turkish%20march%20from%20the%20ruins%20of%20athens,%20.mp3",
                      artista:"Beethoven",
                      musica:"Turkish March"
                    },
                    {src:"https://www.sinj.com/sounds/mp3s/Classical/Vivaldi,%20Mozart%20e%20Bethoven%20-%20Bolero%20de%20RAVEL.MP3",
                    artista:"Vivaldi",
                    musica:"Bolero"
                    },
                    {src:"https://www.sinj.com/sounds/mp3s/Classical/Classical%20-%20Mozart%20-%20Requiem%20Aeternam.mp3",
                      artista:"Mozart",
                      musica:"Requiem Aeternam"
                    },
                    {artista:"U2",
                      src:"https://www.sinj.com/sounds/mp3s/U2%20-%20With%20Or%20Without%20You.mp3",
                      musica:"With Without You"
                    },
                    {src:"http://ns1.1234voce.com.br/Radio_2019/Caetano%20Veloso%20-%20Alegria%20Alegria.mp3",
                      artista:"Caetano Veloso",
                      musica:"Alegria"
                    },
                    {artista:"Queens",
                      musica:"We Are Champions",
                      src:"http://ns1.1234voce.com.br/Radio_2019/We%20Are%20The%20Champions%20-%20Queen.mp3"
                    },
                    {
                      artista:"Michael Jackson",
                      musica:"Beat It",
                      src:"http://re-jazz.net/heimbub/audio/Michael%20Jackson/Number%20Ones/03%20Michael%20Jackson%20-%20Billie%20Jean.mp3"
                    },
                    {artista:"R.E.M",
                      musica:"Losing In My Religion",
                      src:"https://root1967.home.xs4all.nl/R.E.M/Losing%20My%20Religion.mp3"
                    },
                        {
                          artista: "Pink Floid",
                          musica: "Wish You Were Here",
                          src: "https://root1967.home.xs4all.nl/Pink%20Floyd/Wish%20You%20Were%20Here.mp3"
                        },
                        {artista:"AlphaLife",
                          musica:"Forever Young",
                          src:"https://root1967.home.xs4all.nl/Alphaville/Forever%20Young.mp3"
                        },
                        {artista:"David Bowie",
                          musica:"Space Oddity",
                          src:"https://root1967.home.xs4all.nl/David%20Bowie/Space%20Oddity.mp3"
                        },
                        {artista:"Hans Zimmer",
                          musica:"Time",
                          src:"https://dl.musicbazz.ir/music/Soundtrack/Film/I/Inception/Hans%20Zimmer%20-%20Inception%20%282010%29%20MusicBazz.iR/12.%20Time.mp3"
                        },
                        {musica:'untitled',
                          src:"http://ftp2.reduniv.edu.cu/MUSICA/MUSICA_CLASICA/MOZART/503-Mozart.mp3",
                          artista:"Mozart"
                        }]

let rand = new Random()

const play = () => {
  music1 = rand.choice(listMusic_2)
  music2 = rand.choice(listMusic_2)
  cond = Ping(music1.src)>Ping(music2)
  return (cond ? music1 : music2)
}
//radio
let radio = document.getElementById('radio')

radio.onended = (() => {
  onplay = true
  $('#dateMusic').html('')
  radio.pause()
  let music = play()
  radio.src = music.src
  radio.play()
  nameArtist = `<small>artista: ${music.artista}</small>`
  nameMusic = `<small>música: ${music.musica}</small>`
  $('#dateMusic').html(`${nameArtist}<br>${nameMusic}<br>`)
  //print('playing...')
  //pingMusic
  radio.onplay = pig(music)
//  print('duration: '+radio.seekable.end())
})

radio.onerror=(function(){
  onplay = true
  $('#dateMusic').html('')
  radio.pause()
  let music = play()
  radio.src = music.src
  radio.play()
  nameArtist = `<small>artista: ${music.artista}</small>`
  nameMusic = `<small>música: ${music.musica}</small>`
  $('#dateMusic').html(`${nameArtist}<br>${nameMusic}<br>`)
  //print('playing...')
  //pingMusic
  radio.onplay = pig(music)
//  print('duration: '+radio.seekable.end())
})

var onplay;
$('#play').click(function() {
  onplay = true
  $('#dateMusic').html('')
  radio.pause()
  let music = play()
  radio.src = music.src
  radio.play()
  nameArtist = `<small>artista: ${music.artista}</small>`
  nameMusic = `<small>música: ${music.musica}</small>`
  $('#dateMusic').html(`${nameArtist}<br>${nameMusic}<br>`)
  print('playing...')
//pingMusic
  radio.onplaying=setInterval(pig(music),2000)
  
})

pig = (music) => {
    //pingMusic
    pingMusic = (music) => {
      print('ping')
      let ping = Ping(music.src).toFixed(1) + 'ms'
      $('#ping').html(`<small>ping: ${ping}</small>`)
      print(ping)
    }
    pingMusic(music)
}

$('#mute').click(function() {
  onplay = false
  radio.pause()
  print('stopping...')
  $('#dateMusic').html('')
})