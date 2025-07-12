import { Request, Response } from "express";
import PruebasEntity from "../Model/PruebasEntity";


class Prueba {

    constructor(
        private readonly pruebaEntity: typeof PruebasEntity
    ) { }

    createPrueba = async (req: Request, res: Response) => {


        try {
            if (Array.isArray(req.body)) {

                req.body.forEach(async (n) => {
                    const prueba = new this.pruebaEntity({
                        userId: n.userId,
                        title: n.title,
                        body: n.body
                    })

                    await this.pruebaEntity.create(prueba.dataValues)
                })

                return res.json("ok")


            }else{
                const prueba = new this.pruebaEntity({
                    userId: req.body.userId,
                    title: req.body.title,
                    body: req.body.body
                })

                await this.pruebaEntity.create(prueba.dataValues)

                return res.json("ok")
            }
        } catch (error) {

            throw new Error("Error al guardar la prueba: " + error)

        }


    }
}



export default Prueba;
