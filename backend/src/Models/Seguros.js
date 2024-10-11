import { sql } from "../Config/Connection.js";

const getAllSeguros = async () => {
    try {
        const resultado = await sql.query('SELECT * FROM Seguros')
        return resultado.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllSeguros}