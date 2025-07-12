import { Request, Response } from "express";
import PruebasEntity from "../Model/PruebasEntity";


class Prueba {

    constructor(
        private readonly pruebaEntity: typeof PruebasEntity
    ) { }

    createPrueba = async (req: Request, res: Response) => {


        try {
                const prueba = new this.pruebaEntity({
                    userId: req.body.userId,
                    title: req.body.title,
                    body: req.body.body
                })

                await this.pruebaEntity.create(prueba.dataValues)

                return res.json("ok")
            
        } catch (error) {

            throw new Error("Error al guardar la prueba: " + error)

        }


    }
}



export default Prueba;
