const prueba = {
    ejemplo1 : () => { 
        document.getElementById("boton").addEventListener("click", (event) => {
            console.log("Desde botón. Ej1");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
        });

        document.getElementById("prueba").addEventListener("click", (event) => {
            console.log("Desde div. Ej1");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
        });
    },
    ejemplo2: () => {
        document.getElementById("boton").addEventListener("click", (event) => {
            console.log("Desde botón. Ej2");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
            event.stopPropagation();
        });

        document.getElementById("prueba").addEventListener("click", (event) => {
            console.log("Desde div. Ej2");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
        });
    },
    ejemplo3: () => {
        document.getElementById("boton").addEventListener("click", (event) => {
            console.log("Desde botón. Ej2");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
        });

        document.getElementById("prueba").addEventListener("click", (event) => {
            console.log("Desde div. Ej2");
            console.log(`Fase: ${event.eventPhase}`);
            console.log(event);
            event.stopPropagation();
        });
    }
}

prueba.ejemplo3();