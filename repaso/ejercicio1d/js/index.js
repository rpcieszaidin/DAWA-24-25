const ControlUI = {
    letras: ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'],
    buildControl: () => {
        const list = document.querySelectorAll(".dni");
        for (let item of list) {
            const inputButton = document.createElement("input");
            inputButton.setAttribute("type","button");
            inputButton.setAttribute("value","Comprobar");
            item.insertAdjacentElement('afterend',inputButton);
            item.addEventListener('change', ()=> {
                if (!isNaN(parseInt(item.value))) {
                    item.value = item.value + ControlUI.letras[parseInt(item.value) % 23];
                }
            });

            inputButton.addEventListener('click', ()=> {
                if (!isNaN(parseInt(item.value))) {
                    item.value = item.value + ControlUI.letras[parseInt(item.value) % 23];
                }
            })
        }
    }
}
