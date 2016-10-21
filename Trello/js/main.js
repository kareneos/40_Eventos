function muestraInput(){
    var input = document.createElement("input");
    input.setAttribute("placeholder","Ingrese nombre de la lista");
    var boton1 = document.getElementById("anadeLista");
    boton1.appendChild(input);
    
}