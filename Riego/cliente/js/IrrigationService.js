export const IrrigationService = {
    urlBase: null,
    groupList: [],
    init: (url, callback) => {
        IrrigationService.urlBase = url;
        fetch(url).then(async (respuesta) => {
            IrrigationService.groupList = await respuesta.json();
            callback();
        })
    },
    getGroups: () => {
        console.log(IrrigationService.groupList);
        return IrrigationService.groupList;
    },
    updateValves: (valve) => {
        fetch(IrrigationService.urlBase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valve)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const group = IrrigationService.groupList.find((item) => item.name == valve.grupo);
                const valvula = group.valvulas.find((item) => item.name == valve.name);
                valvula.status = valve.status;
            })
            .catch(error => {
                console.error('Error al crear el ítem:', error);
            });
    }
}