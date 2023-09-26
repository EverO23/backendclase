import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto, ProductoI } from '../models/Producto';

export class ProductoController {

    public async getAllProducto(req: Request,
     res: Response) {
        try {
            const producto: ProductoI[] = await Producto.findAll(
             ) // select * from producto
            res.status(200).json({ producto })
        } catch (error) {

        }
    }
}