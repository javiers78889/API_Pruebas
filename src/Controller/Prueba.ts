import { Request, Response } from "express";
import PruebasEntity from "../Model/PruebasEntity";


class Prueba {

    constructor(
        private readonly pruebaEntity: typeof PruebasEntity
    ) { }

    createPrueba = async (req: Request, res: Response) => {


        try {
            if (Array.isArray(req.body)) {
                let prueba;


                req.body.forEach(async (n) => {
                    await this.pruebaEntity.create(n)
                })

                return res.json("ok")


            }
        } catch (error) {

            throw new Error("Error al guardar la prueba: " + error)

        }


    }
}



export default Prueba;