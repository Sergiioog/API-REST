//USAMOS MODULE ES
//INSTALAMOS EXPRESS CON npm install express -g
import express from 'express';
import db from './db/db.js';

const app = express();

app.get('/api/v1/datos', (req, res) => { //Hacemos nuestro primer ENDPOINT (ejemplo)
    res.status(200).send({ //Si esta en 200 que envie estos datos de objeto (las llaves ya estan puestas)
        success: 'true',
        message: 'Datos recuperados con éxito',
        datos: db
    });
});

const PORT = 3000; //Definimos el puerto 3000
app.listen(PORT, () => {//Le decimos que escuche el puerto 3000
    console.log(`Servidor alojado en el puerto http://localhost:${PORT}`)
}); 

