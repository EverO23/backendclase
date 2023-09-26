import { Request, Response, Application, Router } from "express";

import { VentaController } from '../controllers/Venta.controller';

export class VentaRoutes {
    public ventasController: VentaController = new VentaController();

    public routes(app: Application): void {
     
        app.route("/ventas").get(this.ventasController.getAllVenta)
    }
}
