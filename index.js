/*Importaciones*/

require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Usuario = require("./Usuario.model");


/*Index*/

const app = express();

const desiredPort = process.env.PORT || 3000;

app.use(express.json());

app.listen(desiredPort, () => {
  console.log(`server listening in port ${desiredPort}`);
});


/*Conexion a base de datos*/
mongoose
  .connect("mongodb+srv://ITESA:xip9Dx3N0LfPOtzo@morillo.3hfxypj.mongodb.net/Morillo")
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed");
  });




  
/*Router*/
  app.post("/Usuario/Login", async (req, res) => {
    try {
      const { Email, Password } = req.body;
      // Espera a que la consulta a la base de datos se complete
      const user = await Usuario.findOne({ Email: Email, Password: Password });
      console.log(user);
      // Si user tiene un valor (es decir, si se encontró un usuario)
      if (user) { 
          res.status(200).json({ user });
      } else {
        // Si no se encontró un usuario
        res.status(200).json({ message: false });
      }
    } catch (error) {
      // Si ocurre algún error, envía un mensaje de error con un estado 500
      res.status(500).json({ message: error.message });
    }
  });
  


app.post("/Usuario/Register", async (req, res) => {
    try {
      const User = await Usuario.create (req.body)

      res.status(200).json({User});
 
   
  } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

 


  app.get("/Usuario",async (req, res) => {
    try {
      const User = await Usuario.find()

      res.status(200).json({User});
 
   
  } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  app.put("/Usuario/Classes/:id", async (req,res )=>{
    try{
        const {id}= req.params;
        const User= await Usuario.findByIdAndUpdate(id, req.body);

        if(!User){
          return res.status(404).json({message: " Usuario not found"});
        }
       const updateUser = await Usuario.findById(id);
       res.status(200).json(updateUser)

    }
    catch ( error){
      res.status(500).json({message: error.message})
    }
  }
);




