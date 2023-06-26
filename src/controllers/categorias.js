const db = {}
import {con} from '../base/conexion.js'

//------- Categorías --------//
db.getCategorias = async (req, res) => {
    try {
        const {emp} = req.query
        let sql = 'SELECT c.* FROM categoria c WHERE c.empresa_id = ? AND c.estado = 1'
        const [result] = await con.query(sql, [emp])

        if(result.length <= 0) {
            return res.status(404).json(0)
        }
        else{
            return res.status(200).json(result)
        }
    } catch (e) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

db.getCategoria = async (req, res) => {
    try {
        const {id, emp } = req.query
        let sql = 'CALL sp_traer_categoria(?,?)'
        const [result] = await con.query(sql, [id, emp])

        if(result[0].length <= 0) {
            return res.status(404).json(0)
        }
        else{
            return res.status(200).json(result[0])
        }
    } catch (e) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

db.store = async (req, res) => {
    try {
        const {nombre, descripcion, usuario, empresa} = req.query
        let sql = 'CALL sp_insert_categoria(?,?,?,?)'
        const [result] = await con.query(sql, [nombre, descripcion, usuario, empresa])

        if(result.affectedRows > 0 && result.serverStatus === 2){
            return res.status(200).json(1)
        }
        else{
            return res.status(404).json(0)
        }
    } catch (e) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

db.update = async (req, res) => {
    try {
        const {id, nombre, descripcion, usuario, empresa} = req.query
        let sql = 'CALL sp_update_categoria(?,?,?,?,?)'
        const [result] = await con.query(sql, [id, nombre, descripcion, usuario, empresa])
    
        if(result.affectedRows > 0 && result.serverStatus === 2){
            return res.status(200).json(1)
        }
        else{
            return res.status(404).json(0)
        } 
    } catch (e) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

db.delete = async (req, res) => {
    try {
        const {id} = req.query
        let sql = 'CALL sp_delete_categoria(?)'
        const [result] = await con.query(sql, id)
    
        if(result.affectedRows > 0 && result.serverStatus === 2){
            return res.status(200).json(1)
        }
        else{
            return res.status(404).json(0)
        } 
    } catch (e) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

export default db