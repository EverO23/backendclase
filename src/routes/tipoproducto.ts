import { Request, Response, Application, Router } from "express";
import { TipoproductoController } from "../controllers/Tipoproducto";



export class TipoproductoRoutes {
    public tipoproductosController: TipoproductoController = new TipoproductoController();

    public routes(app: Application): void {
     
        app.route("/tipoproductos").get(this.tipoproductosController.getAllTipoproducto)
    }
}