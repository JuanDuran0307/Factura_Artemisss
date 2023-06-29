import getConection from "../db/database.js";
const getCategorias = async(req, res) =>{
    try {
        const connection = await getConection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }


const addCategories = async(req,res)=>{
    try {
        
        const {CategoriaNombre,Descripcion,Imagen} = req.body;
        const category = {CategoriaNombre,Descripcion,Imagen};
        const connection = await getConection();
        const result = await connection.query("INSERT INTO categorias SET ?",category);
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message)
            
    }
}

const getCategoria = async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConection();
        const result = await connection.query("SELECT categoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE categoriaID = ?",id);
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message)
        
    }
}

}
const deleteCategoria = async(req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConection();
        const result = await connection.query("DELETE FROM categorias WHERE categoriaID = ?",id);
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
}

export const methodsHTTP = {
    getCategorias,
    addCategories,
    getCategoria,
    deleteCategoria,
    updateCategories
}