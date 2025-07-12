import { Table, Column, Model, DataType } from 'sequelize-typescript';




@Table({
    tableName: 'pruebas'
})

export class PruebasEntity extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING(500),
        allowNull: false
    })
    body: string
}

export default PruebasEntity;


