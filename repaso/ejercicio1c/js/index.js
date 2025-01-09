const ControlUI = {
    letras: ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'],
    buildControl: () => {
        document.getElementById("dni").addEventListener("change", (ev) => {
            let dni = ev.target;
            dni.value = dni.value + ControlUI.letras[parseInt(dni.value) % 23];
        });
        document.getElementById("boton").addEventListener("click", () => {
            let dniValue = document.getElementById("dni").value;
            document.getElementById("dni").value = dniValue + ControlUI.letras[parseInt(dniValue) % 23];
        });
    }
}

ControlUI.buildControl();