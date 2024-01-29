//USAMOS MODULE ES
//INSTALAMOS EXPRESS CON npm install express -g
import express from 'express';
import db from './db/db.js';

const app = express();
//Middleware para parsear el body a JSON
app.use(express.json());

app.get('/api/v1/datos', (req, res) => { //Hacemos nuestro primer ENDPOINT (ejemplo)
    res.status(200).send({ //Si esta en 200 que envie estos datos de objeto (las llaves ya estan puestas)
        success: 'true',
        message: 'Datos recuperados con éxito',
        datos: db
    });
});

//--------------------------------------------

app.post( '/api/v1/datos', (req, res)  => {
    if(!req.body.title) { //De los datos que nos da (body) que saque la opcion title (si no se encuentra)
        return res.status(400).send({
            success: 'false',
            message: 'Datos: título requerido!!'

        })
    }else if (!req.body.description) {
        return res.status(400).send( {
            success: 'false',
            message: 'Datos: descripción requerida!!'
        });
    } 
    //Creamos un nuevo dato para meterle
    const nuevoDato = {
        id : db.length+1,
        title: req.body.title,
        description: req.body.description
    }
    db.push(nuevoDato); //Añadimos el dato a la db
    return res.status(200).send( { //Devolvemos en caso de que sea 200
        success: 'true',
        message: `Dato: ${nuevoDato.title} añadido correctamente`,nuevoDato
    });
});
const PORT = 3000; //Definimos el puerto 3000
app.listen(PORT, () => {//Le decimos que escuche el puerto 3000
    console.log(`Servidor alojado en el puerto http://localhost:${PORT}`)
}); 

