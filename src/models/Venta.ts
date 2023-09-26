import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
    public fechaVenta!: string;
    public subtotal!: Float32List;
    public impuestos!: Float32List;
    public descuentos!: Float32List;
    public total!: Float32List;
    public createdAt!: Date;
    public updatedAt!: Date;
    public cliente_id!: number;


}



export interface VentaI {
    fechaVenta: string;
    subtotal: Float32List;
    impuestos: Float32List;
    descuentos: Float32List;
    total: Float32List;
    createdAt: Date;
    updatedAt: Date;
    cliente_id: number;
}



Venta.init(
    {
        fechaVenta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        impuestos: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        descuentos: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cliente, // Nombre del modelo al que hace referencia la clave foránea
                key: 'id',      // Nombre de la columna en el modelo Cliente que se referencia
            },
    
        },


    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: true
    }
);
