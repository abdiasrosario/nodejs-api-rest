import {Router} from 'express'
import login from '../controllers/login.js'
import categoria from '../controllers/categorias.js'
const router = Router()

//Routes API

//-- Login --//
router.get('/login', login.login)

//-- Categorias --//
router.get('/categorias', categoria.getCategorias)
router.get('/categorias', categoria.getCategoria)
router.post('/categorias', categoria.store)
router.put('/categorias', categoria.update)
router.delete('/categorias', categoria.delete)

export default router