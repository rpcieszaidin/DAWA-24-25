import { InputMapper } from "./mapper/InputMapper.js"


export class Validador {

    static init(Config) {
        Config.addType("euro",Validador.euroAddEvents);
        Config.addType("date",Validador.dateAddEvents);
        [...document.forms].forEach((item) => {
            InputMapper(item.elements).forEach( (item)=> {
                Config.classTypes[item.type](item);        
            });   
        })
    }

    static euroAddEvents(item) {
        console.log("Edito euro");
    }

    static dateAddEvents(item) {
        console.log("Edito fecha");
    }
}