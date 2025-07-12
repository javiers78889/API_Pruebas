import { Router } from "express";
import Prueba from "../Controller/Prueba";
import PruebasEntity from "../Model/PruebasEntity";



const routerPruebas = Router();
const injectPrueba = new Prueba(PruebasEntity)




routerPruebas.post('/',injectPrueba.createPrueba)


export default routerPruebas