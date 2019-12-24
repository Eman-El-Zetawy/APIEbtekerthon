const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 6500 ; 


app.use(bodyParser.json());
 app.post("/contactPage2", (req, res) =>{

   let n = {
     name : req.body.name  ,
     position :req.body.position  ,
      mobile : req.body.mobile ,  
    email :req.body.email 
    };
                    console.log(n);
                    return res.status(201).send(n);  
                  });  


 app.post( "/contactPage1", (req, res) =>{
                 
                    let n = {
                      venue : req.body.venue  ,
                      phone :req.body.phone  ,  
                     email :req.body.email 
                     };
                                     console.log(n);
                                     return res.status(201).send(n);  
                                   });  


 app.listen (port);