export class Check {
    constructor(parent, name, callback) {
        this.name = name;
        this.group = document.createElement('div');
        this.group.setAttribute('id', name);
        parent.appendChild(this.group);
        this.client = null;
        this.sender = callback;
        this.valvulas = [];
    }

    changeValue(name, value) {
        const valvula = this.valvulas.find((item) => item.name == name);
        valvula.status = value;
        this.sender({...valvula, grupo:this.name});
    }

    addCheck(name, status) {
        this.valvulas.push({
            name : name,
            status : status
        })
        const check = document.createElement("label");
        check.classList.add("form-switch");
        this.group.appendChild(check);
        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        input.checked = status;
        check.appendChild(input);
        check.appendChild(document.createElement("i"));
        const span = document.createElement('span');
        const text = document.createTextNode(status ? 'ON' : 'OFF');
        span.appendChild(text);
        check.appendChild(span);
        input.addEventListener('change', (event)=> {
            event.target.checked ? span.innerHTML = 'ON' :  span.innerHTML = 'OFF';
            this.changeValue(name, event.target.checked);
        })
    }

    
}