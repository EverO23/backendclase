import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/Venta';

export class VentaController {

    public async getAllVenta(req: Request,
     res: Response) {
        try {
            const venta: VentaI[] = await Venta.findAll(
             ) // select * from venta
            res.status(200).json({ venta })
        } catch (error) {

        }
    }
}