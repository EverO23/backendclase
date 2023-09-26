import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Tipoproducto } from "./TipoProducto";

export class Producto extends Model {
    public nombre!: string;
    public marca!: string;
    public precio!: Float32List;
    public stockMin!: Float32List;
    public cantidad!: Float32List;
    public tipoProducto_id!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}



export interface ProductoI {
    nombre: string;
    marca: string;
    precio: Float32List;
    stockMin: Float32List;
    cantidad: Float32List;
    tipoProducto_id: number;
    createdAt: Date;
    updatedAt: Date;
}



Producto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stockMin: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        tipoProducto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Tipoproducto, // Nombre del modelo al que hace referencia la clave foránea
                key: 'id',      // Nombre de la columna en el modelo Cliente que se referencia
            },

        },


        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },

    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);