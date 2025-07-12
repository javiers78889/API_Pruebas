import express from 'express';
import routerPruebas from './Router/PruebasRouter';
import dbConfig from './config/dbConfig';


async function connectDB() {

    await dbConfig.authenticate()
    dbConfig.sync()
    console.log('Base de datos conectada correctamente ')
}

connectDB()

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use('/pruebas', routerPruebas)



export default server;