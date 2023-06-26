import app from './app.js'

const port = process.env.PORT || 8000

app.listen(port, function(){
    console.log(`Aplicación iniciada en el puerto: ${port}`);
})