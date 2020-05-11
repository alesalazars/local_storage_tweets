// VARIABLES
const listaTweets = document.getElementById('lista-tweets');



// EVENT LISTENERS
eventListeners();

function eventListeners(){
  // Cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  // Borrar tweets
  listaTweets.addEventListener('click', borrarTweet);

  // Contenido cargado
  document.addEventListener('DOMContentLoaded', localStorageListo)
}



// FUNCIONES

// Añadir tweet del formulario
function agregarTweet(e){
  e.preventDefault();
  console.log('Formulario enviado');
  // Leer el valor de textarea
  const tweet = document.getElementById('tweet').value;

  crearTweetEnDom(tweet);

  // Añadir a Local Storage
  agregarTweetLocalStorage(tweet);
}

// Elimina el tweet del DOM
function borrarTweet(e){
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
}

// Mostrar datos de Local Storage en la lista
function localStorageListo(){
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet){
    crearTweetEnDom(tweet);
  });
}

function crearTweetEnDom(tweet){
  // Crear boton de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';

  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.innerText = tweet;
  // Añade el botón de borrar al tweet
  li.appendChild(botonBorrar)
  // Añade el tweet a la lista
  listaTweets.appendChild(li);
}

// Agrega tweet a Local Storage
function agregarTweetLocalStorage(tweet){
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  // Añadir el nuevo tweet
  tweets.push(tweet);
  // Convertir de string a array para Local Storage (si no lo hacemos como array, se reescribe encima uno del otro)) * Local Storage solo graba strings y arrays, no numeros ni otro tipo de elementos.
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elemetos en Local Storage, retorna un array
function obtenerTweetsLocalStorage(){
  let tweets;
  //Revisamos los valores de Local Storage
  if(localStorage.getItem('tweets') === null){
    tweets = [];
  }else{
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet){
  let tweets, tweetBorrar;

  // Elimina la X del tweet
  tweetBorrar = tweet.substring(0, tweet.length - 1);

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet, index){
    if(tweetBorrar === tweet){
      tweets.splice(index, 1);
    }
  });

  console.log(tweetBorrar);

  localStorage.setItem('tweets', JSON.stringify(tweets));
}