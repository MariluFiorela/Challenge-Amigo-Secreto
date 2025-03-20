// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById
("amigo");
const listAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
//if (inputtAmigo.value)
// alert("debes ingresar un nombre")
    console.log(inputAmigo.value)
    listAmigos.push(inputAmigo.value);
    
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;  
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listAmigos.length);
    const amigoSecreto = listAmigos[random];
    ulResultado.innerHTML = `<li>el amigo secreto es: ${amigoSecreto}</li>`;

    }


