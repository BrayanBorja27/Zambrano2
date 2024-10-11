import { getAllSeguros } from "../Service/SegurosService"
import React, { useEffect, useState } from 'react';


const ListarSeguros = () => {

    const [seguros, setSeguro] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetchSeguro()
    }, [])

    const fetchSeguro = async () => {
        try {
            const data = await getAllSeguros();
            setSeguro(data)
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div>
            <table className="table  table-striped">

                <thead>
                    <tr>
                        <th scope="col">Codigo Seguro</th>
                        <th scope="col">Nombre Seguro</th>
                        <th scope="col">Precio Seguro</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {seguros.map((seguro) => {
                        <tr>
                            <th scope="row">1</th>
                            <td>{seguro.Id_Seguro}</td>
                            <td>{seguro.Nombre_Seguro}</td>
                            <td>{seguro.Precio_Diario}</td>
                            <td>Editar - Eliminar</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ListarSeguros
