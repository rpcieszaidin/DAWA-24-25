import express from 'express';
import cors from 'cors';

// Crear la aplicación de Express
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(cors());
app.use(express.json());

const datos = {
    lista: [
        {
            name : 'grupo1',
            valvulas : [
                {
                    name : 'valvula1',
                    status : true
                },
                {
                    name: 'valvula2',
                    status: false
                }
            ]
        },
        {
            name: 'group2',
            valvulas: [
                {
                    name : 'valvula1',
                    status : true
                }
            ]
        }
    ]

}

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la REST API con Node.js y import!');
});

app.get('/api/items', (req, res) => {    
    res.json(datos.lista);
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    const group = datos.lista.find((item) => item.name == newItem.grupo);
    const valvula = group.valvulas.find((item) => item.name == newItem.name);
    valvula.status = newItem.status;
    console.log(`Llega ${newItem.name}`);
    res.status(201).json(newItem);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
