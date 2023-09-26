import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Tipoproducto extends Model {
    public name!: string;
    public createdAt !: Date;
    public updatedAt!: Date;

}



export interface TipoproductoI {
    name: string;
    createdAt: Date;
    updatedAt: Date;
}



Tipoproducto.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },






    },
    {
        tableName: "tipoproductos",
        sequelize: database,
        timestamps: true
    }
);
