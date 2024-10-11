import { getAllSeguros } from "../Models/Seguros.js";
const getAllS= async (req,res) => {

    try {
        
const Seguros=await getAllSeguros();
res.json(Seguros);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export {getAllS}