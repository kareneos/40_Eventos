//Crear lista al hacer click en botón
function agregarLi(){
    var check = document.createElement("input");
    var li = document.createElement("li");
    var valorTextArea = document.getElementById("nuevaTarea").value;
    var cuadro = check.setAttribute("type","checkbox");
    //tachar li al hacer click en checkbox
    check.onclick = function(ev){
        ev.target.parentNode.classList.toggle("checked");
    }
    var texto = document.createTextNode(valorTextArea);
     //Botón para quitar un li
    var span = document.createElement("span");
    var boteBasura = document.createTextNode("\uD83D\uDDD1");
    span.className = "close";
    //appendChilds
    li.appendChild(check);
    li.appendChild(texto);
    span.appendChild(boteBasura);
    li.appendChild(span);
    //No agregar campos vacíos
    if (valorTextArea.length == 0){
        alert("Por favor ingresa una tarea");
    } else {
    //agregar nueva tarea
        document.getElementById("lista").appendChild(li);
    }
   //No quede texto guardado en el textarea
   document.getElementById("nuevaTarea").value =""; 
   //Eliminar un elemento de la lista
    var quitar = document.getElementsByClassName("close");
    for (var i = 0; i < quitar.length; i++) {
      quitar[i].onclick = function() {
        var elimina = this.parentElement;
        elimina.style.display = "none";
      }
    }  
}