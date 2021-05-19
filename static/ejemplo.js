
window.onload = function (){

    boton1 = document.getElementById("b1");
    boton1.onclick = function (){
        let elemento = document.getElementById("Titulo");
        elemento.innerHTML = `<p>Otro Elemento</p>`;
    }

    boton2 = document.getElementById("b2");
    boton2.onclick = function (){
        console.log("clickeado");
    }

}

