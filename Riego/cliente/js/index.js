import { Check } from './check.js';

const ValvulaServicio = {
  urlBase: null,
  init : (url, container) => {
    ValvulaServicio.urlBase = url;
    fetch(url).then(async (respuesta) => {
      const groupList = await respuesta.json();
      for(let grupo of groupList) {
        const group = new Check(container, grupo.name, ValvulaServicio.send);
        for (let valvula of grupo.valvulas) {
          group.addCheck(valvula.name, valvula.status);
        }
      }
    })
  },
  send: (valvula) => {
    console.log(valvula);
    fetch(ValvulaServicio.urlBase, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(valvula)
                })
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                  })
                  .then(data => {
                    console.log('Ítem creado:', data);
                  })
                  .catch(error => {
                    console.error('Error al crear el ítem:', error);
                  });
  }
 }

 ValvulaServicio.init('http://localhost:3000/api/items', 
  document.getElementById('container')
 );