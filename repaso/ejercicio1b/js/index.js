var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

function compruebaLetra(object) {
    object.target.value = object.target.value + letras[parseInt(object.target.value) % 23];
}

function compruebaLetraBoton() {
    let dniValue = document.getElementById("dni").value;
    document.getElementById("dni").value = dniValue + letras[parseInt(dniValue) % 23];
}

document.getElementById("dni").addEventListener("change", compruebaLetra);
document.getElementById("boton").addEventListener("click", compruebaLetraBoton);