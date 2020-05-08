// VARIABLES
const listaTweets = document.getElementById('lista-tweets');



// EVENT LISTENERS
eventListeners();

function eventListeners(){
  // Cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);
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
}