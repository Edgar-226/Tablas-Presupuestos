const express = require("express");
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./mvc/db/conexion');
const loginView = require('./mvc/view/loginView')
const presupuestosView = require('./mvc/view/presupuestosView')

const app = express();


//Middlelware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// lo que inicia el sevidor
async function serverStart() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamemte con la Base de datos:', error);
    }
}

serverStart();
//iniciamos vista

loginView(app)
presupuestosView(app)