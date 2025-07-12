import { Sequelize } from "sequelize-typescript";
import PruebasEntity from "../Model/PruebasEntity";
import dotenv from 'dotenv';

dotenv.config()


const dbConfig = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    models: [PruebasEntity],
    dialectOptions: {
        ssl: {
            require: true,
            rejectunauthorized: false
        }
    }
})


export default dbConfig;