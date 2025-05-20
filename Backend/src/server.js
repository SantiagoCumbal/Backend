//Requerir modulos
import express from "express"; //framework
import dotenv from "dotenv";
import cors from "cors"; //sirve para conectar el backend y frontend con codigo de area

//Inicializaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000) 
//app.set('port', process.env.CLOUDINARY || 3000) //process es paara datos sensibles
app.use(cors())

//MiddLewares
app.use(express.json()) //guarda la informacion del frontend en un archivo json para procesar el backend

//Rutas
app.get('/',(req,res)=>{
    res.send("Server on")
})

//Exportar la instancia
export default app

//EL uso del archivo no es muy usado pero es necesario