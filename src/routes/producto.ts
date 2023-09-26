import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/Producto.controller';

export class ProductoRoutes {
    public productosController: ProductoController = new ProductoController();

    public routes(app: Application): void {
     
        app.route("/productos").get(this.productosController.getAllProducto)
    }
}