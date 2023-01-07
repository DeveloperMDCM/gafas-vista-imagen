let fondo_full = document.getElementById("fondo_full");
let fondo_full2 = document.getElementById("fondo_full2");
let fondo_full3 = document.getElementById("fondo_full3");
let fondo_full4 = document.getElementById("fondo_full4");
let btn_blur = document.getElementById("button2");
let btn_blur2 = document.getElementById("button3");
let btn_blur3 = document.getElementById("button3");
let bg_gafas1 = document.getElementById("bg_gafas1");
let bg_gafas2 = document.getElementById("bg_gafas2");
let bg_gafas3 = document.getElementById("bg_gafas3");
let gafas = document.getElementById("gafas");
var contador = 0;
var contador2 = 0;


function limpiar() {
    fondo_full.style.backgroundImage = "url('')";
    fondo_full2.style.backgroundImage = "url('')";
    fondo_full3.style.backgroundImage = "url('')";
    document.getElementById('fondo').value = null;

}




function limpiarFondoSolo() {

    if (contador2 == 0) {
        console.log(contador2);
        btn_blur.disabled = true;
        fondo_full.style.backgroundImage = "url('')";
        fondo_full.style.filter = "blur(10px)";
        btn_blur2.innerHTML = "Lentes sin blur";
        fondo_full2.style.filter = "blur(20px)";
        fondo_full3.style.filter = "blur(20px)";
        contador2 = 1;

    } else if (contador2 == 1) {
        contador2 = 0;
        fondo_full.style.backgroundImage = "url('')";
        fondo_full.style.filter = "blur(30px)";
        btn_blur2.innerHTML = "Lentes con blur";
        fondo_full2.style.filter = "blur(0)";
        fondo_full3.style.filter = "blur(0)";
        btn_blur.disabled = true;
    }

}

function sinBlur() {
    console.log(contador);
    if (contador == 0) {
        contador = 1;
        fondo_full.style.filter = "blur(0)";
        btn_blur.innerHTML = "Aplicar Blur";
    } else {
        contador = 0;
        fondo_full.style.filter = "blur(30px)";
        btn_blur.innerHTML = "Quitar Blur"
        fondo_full2.style.filter = "blur(0)";
        fondo_full3.style.filter = "blur(0)";

    }
}


let fondo = document.getElementById("fondo");
fondo.addEventListener("change", function () {
    let cargar = new FileReader();
    cargar.readAsDataURL(fondo.files[0]); // Iniciar una solicitud asincrónica
    cargar.onload = function () {
        // Después de la lectura, los datos se guardan en el atributo de resultado del objeto   
        fondo_full.style.backgroundImage = "url(" + this.result + " )";
        fondo_full.style.filter = "blur(20px)";
        fondo_full2.style.backgroundImage = "url(" + this.result + " )";
        fondo_full3.style.backgroundImage = "url(" + this.result + " )";
        // foto.src = this.result
        contador = 1;
        contador2 = 1;
        sinBlur();
        btn_blur.disabled = false;
    }
})


//Mivimento con el mouse en las imagenes                     
let mousePosition;
let offset = [0, 0];
let offset2 = [0, 0];
let offset3 = [0, 0];
let isDown = false;
gafas.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        gafas.offsetLeft - e.clientX,
        gafas.offsetTop - e.clientY
    ];
    offset2 = [
        fondo_full2.offsetLeft - e.clientX,
        fondo_full2.offsetTop - e.clientY
    ];
    offset3 = [
        fondo_full3.offsetLeft - e.clientX,
        fondo_full3.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY

        };
        gafas.style.left = (mousePosition.x + offset[0]) + 'px';
        gafas.style.top = (mousePosition.y + offset[1]) + 'px';
        fondo_full2.style.left = (mousePosition.x + offset2[0]) + 'px';
        fondo_full2.style.top = (mousePosition.y + offset2[1]) + 'px';
        fondo_full3.style.left = (mousePosition.x + offset3[0]) + 'px';
        fondo_full3.style.top = (mousePosition.y + offset3[1]) + 'px';
    }
}, true);