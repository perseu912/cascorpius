
//Reinan_Br 20/03/2020 13:10

const time = () => {
  let date = new Date();
  /*
  this.year = date.getFullYear();
  this.month = date.getMonth();
  this.day = date.getDay();
  this.hour = date.getHours();
  this.min = date.getMinutes();
  this.seg = date.getSeconds();
  this.mseg = date.getMilliseconds();
  */
  let data = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}]`;
  return { data };
}

const print = (input) => {
  console.log(`${time().data}: ${input}`);
}


const Random = class{
  randInt(init=0,end){
    let i = Math.ceil(init);
    let f = Math.floor(end);
    //print(f)
    let res = Math.floor(Math.random()*(f-i+1))+i
    return res
  }
  choice(array){
    let layer = array.length
    return array[this.randInt(0,layer-1)]
  }
}
rand = new Random()
//print(rand.randInt(0,2))

a =['amor','odio','colorida']


const Ping = (url) => {
  let init = Date.now()
  fetch(url,{mode:'no-cors'}).then(()=>print('ok res fetch')).catch(()=> print('error response fetch'))
  return Date.now()-init
}


//print(rand.choice(a))

//print(4)
