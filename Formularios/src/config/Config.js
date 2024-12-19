
export const Config = {
    classTypes : {
        
    },
    addType : (typeName, callback)=>{
        Config.classTypes = {
            ...Config.classTypes,
            [typeName] : callback
        }
    }
}

Config.addType("Hola", (item)=>{
    console.log("Trato el evento para hola")
})

console.log(Config.classTypes);

Config.classTypes["Hola"]("Gato");