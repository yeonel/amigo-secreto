// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo"); 
    let nombre = inputNombre.value.trim(); //El trim es para borrar los espacios al inicio y al final
    //Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return; //Salir de la función si no hay un nombre válido
    }
    //Agregar un nombre al array de amigos
    amigos.push(nombre);
    //Limpiar el campo de entrada
    inputNombre.value = "";
    //Mostrar la lista actualizada 
    actualizarLista();
}
function actualizarLista() {
    //Obtener elementos de la lista HTML
    let lista = document.getElementById("listaAmigos");
    //Limpiar la lista antes de actualizar
    lista.innerHTML = "";
    //Recorrer el array de amigos y agregar cada uno como <li>
    for (let amigo of amigos) {
        let li = document.createElement("li"); //Crear un nuevo elemento <li>
        li.textContent = amigo; //Asignar el nombre del amigo al <li>
        lista.appendChild(li); //Agregarlo a la lista en el HTML
    }
}