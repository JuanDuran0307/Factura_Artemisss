import {Router} from "express";

import { methodsHTTP as categoriaController } from "../controllers/categorias.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias); 
router.post("/", categoriaController.addCategories); 
router.get("/:id", categoriaController.getCategoria); 
router.delete("/:id", categoriaController.deleteCategoria); 
router.put("/:id", categoriaController.updateCategoria); 

export default router;


