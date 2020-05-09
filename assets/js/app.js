// VARIABLES
const listaTweets = document.getElementById('lista-tweets');



// EVENT LISTENERS
eventListeners();

function eventListeners(){
  // Cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  // Borrar tweets
  listaTweets.addEventListener('click', borrarTweet);
}



// FUNCIONES

// Añadir tweet del formulario
function agregarTweet(e){
  e.preventDefault();
  console.log('Formulario enviado');
  // Leer el valor de textarea
  const tweet = document.getElementById('tweet').value;
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

  // Añadir a Local Storage
  agregarTweetLocalStorage(tweet);
}

// Elimina el tweet del DOM
function borrarTweet(e){
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    console.log(e.target.parentElement.remove());
    alert('Tweet eliminado');
  }
}

// Agrega tweet a Local Storage
function agregarTweetLocalStorage(tweet){
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  // Añadir el nuevo tweet
  tweets.push(tweet);
  // Convertir de string a array para Local Storage (si no lo hacemos como array, se reescribe encima uno del otro)) * Local Storage solo graba strings, no numeros ni otro tipo de elementos.
  localStorage.setItem('tweets', JSON.stringify(tweets));
  //Agregar a Local Storage
  localStorage.setItem('tweets', tweet);
}

// 
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