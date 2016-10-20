//Crear lista al hacer click en botón
function agregarLi(){
    var li = document.createElement("li");
    var valorTextArea = document.getElementById("nuevaTarea").value;
    var texto = document.createTextNode(valorTextArea);
    
    li.appendChild(texto);
    
    if (valorTextArea.length == 0){
        alert("Por favor ingresa una tarea");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("nuevaTarea").value =""; 
    //Botón para quitar un li
    var span = document.createElement("span");
    var boteBasura = document.createTextNode("x");//cambiar por icono
    span.className = "close";
    span.appendChild(boteBasura);
    li.appendChild(span);
    //Checkbox
    var check = document.createElement("input");
    var cuadro = check.setAttribute("type","checkbox");
    li.appendChild(check);
}