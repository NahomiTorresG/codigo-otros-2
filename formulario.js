
//Se traen los elementos del html
const formulario = document.querySelector(".formulario"); //se cambia de var a const y se llama por clase, además de que el nombre completo era "formulario", no "form"

//Falta llamar al evento
const send = document.querySelector("#send");

//Funcion que quiero que se ejecute cuando ocurra el evento
send.addEventListener("click", function(e){



  e.preventDefault(); //solo se completa para que se muestre "preventDefault".
  
  var n = formulario.elements[0]
  var edad = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edadValue = edad.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    alert ("error, escriba su nombre por favor") //se agrega el alert para hacerle saber al usuario que debe agregar su nombre
    return
  }
  if (edadValue < 18 || edadValue > 120) { //se cambia a edadValue y se agrega el alert 
   alert ("error, no tienes la edad permitida")
   return
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
});

/* Este código parece repetirse abajo
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  

let lista = document.getElementById("listaDeInvitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //la escritura correcta es "classList.add", no "classList.added"
lista.appendChild(elementoLista)

// var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
// var espacio = document.createElement("br");
// // spanNombre.textContent = "Nombre: ";       Parece otro código repetido
// // inputNombre.value = nombre ;
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}