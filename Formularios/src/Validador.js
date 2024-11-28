import { InputMapper } from "./mapper/InputMapper.js"
import { Config } from "./config/Config.js"

export class Validador {
    #operations = {
        "euro": this.#euroAddEvents,
        "date": this.#dateAddEvents
    }

    constructor() {
        [...document.forms].forEach((item) => {
            InputMapper(item.elements).forEach( (item)=> {
                this.#operations[item.type](item);        
            });   
        })
    }

    #euroAddEvents(item) {
        console.log("Edito euro");
    }

    #dateAddEvents(item) {
        console.log("Edito fecha");
    }
}