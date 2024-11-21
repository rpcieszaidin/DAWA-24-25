export const uiDrag = {
    init: (selector1, selector2) => {
        document.querySelectorAll(selector1).forEach((item) => {
            item.addEventListener("drop", (event) => {
                event.preventDefault();  // Evitar el comportamiento por defecto
                var data = JSON.parse(event.dataTransfer.getData("text"));
                console.log(data);
                var draggedElement = document.getElementById(data.id);
                var rect = event.target.getBoundingClientRect();
                var offsetX = event.clientX - rect.left;
                var offsetY = event.clientY - rect.top;

                draggedElement.style.position = "absolute";
                draggedElement.style.left = offsetX - (draggedElement.offsetWidth / 2) + "px";
                draggedElement.style.top = offsetY - (draggedElement.offsetHeight / 2) + "px";
                draggedElement.style.backgroundColor = event.target.dataset.color; // =)

                if (!event.target.contains(draggedElement)) {
                    event.target.appendChild(draggedElement);
                }
            });
            item.addEventListener("dragover", (event) => {
                event.preventDefault();  // Evita el comportamiento predeterminado (no permitir soltar)
            })
        });

        document.querySelectorAll(selector2).forEach((item) => {
            item.setAttribute("draggable", "true");
            item.addEventListener("dragstart", (event) => {
                const sendData = {
                    id: event.target.id,
                    mensaje: "Esto es una prueba"
                }
                event.dataTransfer.setData("text", JSON.stringify(sendData));
                console.log(event);
            })
        })
    }
}