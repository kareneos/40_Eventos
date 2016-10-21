function muestraInput(){
    //crear input
    var input = document.createElement("input");
    input.setAttribute("placeholder","Ingrese nombre de la lista");
    //crear botón
    var boton2 = document.createElement("button");
    boton2.setAttribute("class","btn btn-primary");
    //crear texto del botón
    var textoBoton2 = document.createTextNode("Añadir");
    //Agregar texto a botón2
    boton2.appendChild(textoBoton2);
    //añadir input al hacer click en botón
    var boton1 = document.getElementById("anadeLista");
    boton1.appendChild(input);
    //Agregar botón2 al hacer click en botón
    boton1.appendChild(boton2);
    
}