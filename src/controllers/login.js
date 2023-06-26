const db = {}
import {con} from '../base/conexion.js'

//-------- Login -------//
db.login = async (req, res) => {
    try {
        const {user, pass} = req.query
        let sql = 'CALL sp_login(?,?)'
        const [result] = await con.query(sql, [user, pass])
    
        if(result[0].length <= 0) {
            return res.status(404).json(0)
        }
        else{
            return res.status(200).json(result[0])
        } 
    } catch (error) {
        return res.status(500).json({
            message: 'Error al conectarse a la base de datos'
        })
    }
}

export default db