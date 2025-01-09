export const ValvesHandler = {
    init: (container, service) => {
        for(let grupo of service.getGroups()) {
            const group = new Check(container, grupo.name, service.updateValves);
            for (let valvula of grupo.valvulas) {
              group.addCheck(valvula.name, valvula.status);
            }
        }
    }
}