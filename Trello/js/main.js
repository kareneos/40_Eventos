function muestraInput(){
    //crear input
    var input = document.createElement("input");
    input.setAttribute("placeholder","Ingrese nombre de la lista");
    input.setAttribute("id","inputTituloLista");
    //crear botón2
    var boton2 = document.createElement("button");
    boton2.setAttribute("class","btn btn-primary btn-sm");
    //crear texto del botón2
    var textoBoton2 = document.createTextNode("Guardar");
    //Agregar texto a botón2
    boton2.appendChild(textoBoton2);
    //añadir input y botón2 al hacer click en botón1
    var boton1 = document.getElementById("anadeLista");
    boton1.appendChild(input);
    boton1.appendChild(boton2);
    //crear título al dar click en guardar
    boton2.onclick = function(){
        if (input.value.length == 0){
            alert("Ingrese nombre de la lista");
        }else{
            //crea elemento
            var h2 = document.createElement("h2");
            var textoTitulo = input.value;
            var titulo = document.createTextNode(textoTitulo);
            h2.appendChild(titulo);
            var titulo1 = document.getElementById("titulo");
            titulo1.appendChild(h2);
           //Deja input en blanco
            document.getElementById("inputTituloLista").value = "";
            //Botón añadir una tarjeta
            var anadirTarjeta = document.createElement("button");
            anadirTarjeta.setAttribute("class","btn btn-success btn-sm")
            var textoBotonTarjeta = document.createTextNode("Añadir una tarjeta");
            anadirTarjeta.appendChild(textoBotonTarjeta);
            titulo1.appendChild(anadirTarjeta);
        }
    }
}