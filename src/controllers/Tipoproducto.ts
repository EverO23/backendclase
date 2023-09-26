import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Tipoproducto, TipoproductoI } from '../models/TipoProducto';

export class TipoproductoController {

    public async getAllTipoproducto(req: Request,
     res: Response) {
        try {
            const tipoproducto: TipoproductoI[] = await Tipoproducto.findAll(
             ) // select * from producto
            res.status(200).json({tipoproducto })
        } catch (error) {

        }
    }
}