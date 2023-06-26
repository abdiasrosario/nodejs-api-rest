import express from 'express';
import {config} from 'dotenv'

const app = express()
config()


app.use(express.json())

//Router
import routes from './routes/router.js'
app.use('/api', routes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Controller no encontrado'
    })
})

export default app