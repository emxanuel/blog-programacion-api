const mongoose= require('mongoose');


const UsuarioSchemma = mongoose.Schema(

      {
         Name:{
             type:String,
             required:[true, "Please enter your name"],
         },
         Password: {
               type: String,
               required:[true, "Please enter the password"],
         },
         Email: {
               type: String,
               required:[true, "Please enter the Email"],                                                                                       
                             
        },   
        finishedClasses:{
        type: Array,
        required:[true, "Please enter the finished clases"],                                                                                       
                                                                                                                                                         
        }                                                                                                                                                                                                                                                                                                                                                                           
      } 
      
                                                                                             

);
const Usuario = mongoose.model("usuario",UsuarioSchemma)

module.exports=Usuario;