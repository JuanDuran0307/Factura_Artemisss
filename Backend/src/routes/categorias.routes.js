import {Router} from "express";

import { methodsHTTP as categoriaController } from "../controllers/categorias.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias); 

export default router;


