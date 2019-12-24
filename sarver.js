const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 6600 ; 
var mysql = require('mysql');
// var con = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password:"root" 
//     // password: "1234" 
//       , database: "ebtekarthon"
// }); 

con.connect(function(err) {
 if (err) throw err ;  console.log("Connected!");
  // con.query("CREATE DATABASE ebtekarthon ", function (err, result) { if (err) throw err;
  //  console.log("Database created"); });

//   var sql ="CREATE TABLE home (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  "imge VARCHAR(255) NOT NULL , Title VARCHAR(255) NOT NULL ,Location VARCHAR(255) NOT NULL ,date VARCHAR(255) NOT NULL , PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });

//   var sql ="CREATE TABLE about (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//   "Title VARCHAR(255) NOT NULL ,Text VARCHAR(255) NOT NULL ,url VARCHAR(255) NOT NULL , PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });


//   var sql ="INSERT INTO about (Title, Text , url ) VALUES ('a', 'b' , 'c')";
//   con.query(sql, function (err, result) {  if (err) throw err;   console.log("insert created");});

//  var sql ="INSERT INTO `ebtekarthon`.`home` (`imge`, `Title`, `Location`, `date`) VALUES ('s', 'w', 'w', 'w')";
//   con.query(sql, function (err, result) {  if (err) throw err;   console.log("insert created");});


 // INSERT INTO `ebtekarthon`.`home` (`imge`, `Title`, `Location`, `date`) VALUES ('s', 'w', 'w', 'w');

});

  // } 
   app.use(bodyParser.json());

app.get('/about', (req, res) =>{
      con.query("SELECT * FROM  about ", function (err, result) {
      if (err) throw err ; 
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      console.log(result);
        res.send(result);
      });
  });

app.get('/home', (req, res) =>{
      con.query("SELECT * FROM  ebtekarthon.home", function (err, result) {
      if (err) throw err ; 
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      console.log(result);
        res.send(result);
      });
  });

  app.get('/contactp', (req, res) =>{
    con.query("SELECT * FROM  ebtekarthon.contactp", function (err, result) {
    if (err) throw err ; 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    console.log(result);
      res.send(result);
    });
});

app.get('/contacts', (req, res) =>{
  con.query("SELECT * FROM  ebtekarthon.contacts", function (err, result) {
  if (err) throw err ; 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  console.log(result);
    res.send(result);
  });
});

app.put('/about', (req, res) =>{
  let a = {
  id : 1 , 
  Title : req.body.Title  ,
  Text : req.body.Text,
  url : req.body.url
 } ; 
  con.query("UPDATE about  SET  Title =' "+ req.body.Title + "' , Text =' " + req.body.Text  + " ' , url =' " + req.body.url + "'  WHERE id ="+ a.id ,
   function (err, result) {
    if (err) throw err;
    console.log(req.body ,result ,  a );
     return res.status(201).send(a); 
       });
      });


app.put('/home', (req, res) =>{
  let a = {
  id : 1 ,
   imge : 2 ,
  title : req.body.title  ,
  location : req.body.location,
  date : req.body.date
 } ; 
  con.query("UPDATE home  SET  Title =' "+ req.body.title + "' , Location  =' " + req.body.location  + " ' , date =' " + req.body.date + "'  WHERE id ="+ a.id ,
   function (err, result) {
    if (err) throw err;
    console.log(req.body ,result ,a );
     return res.status(201).send(a); 
       });
   
      });
    
       app.listen(port);





      //  CREATE TABLE `ebtekarthon`.`contact` (
      //   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      //   `name` VARCHAR(45) NOT NULL,
      //   `position` VARCHAR(45) NOT NULL,
      //   `mobile` INT(10) NOT NULL,
      //   `email` VARCHAR(45) NOT NULL,
      //   `logo` VARCHAR(45) NOT NULL,
      //   PRIMARY KEY (`id`)) ;   
     // INSERT INTO `ebtekarthon`.`contact` (`name`, `position`, `mobile`, `email`, `logo`) VALUES ('e', 'r', '56', 'h', 'h');
   // INSERT INTO `ebtekarthon`.`contact` (`name`, `position`, `mobile`, `email`, `logo`) VALUES ('w', 'e', '567', 'g', 'jk');
// INSERT INTO `ebtekarthon`.`contact` (`name`, `position`, `mobile`, `email`, `logo`) VALUES ('gj', 'ghk', '68', 'jf', 'hjgk');
// INSERT INTO `ebtekarthon`.`contact` (`name`, `position`, `mobile`, `email`, `logo`) VALUES ('ujrtu', 'ryuy', '87', 'hjg', 'kjk');
// CREATE TABLE `ebtekarthon`.`contacts` (
  // `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  // `logo` VARCHAR(45) NOT NULL,
  // `url` VARCHAR(45) NOT NULL,
  // PRIMARY KEY (`id`));
//   INSERT INTO `ebtekarthon`.`contacts` (`logo`, `url`) VALUES ('xbn', 'dnd');
// INSERT INTO `ebtekarthon`.`contacts` (`logo`, `url`) VALUES ('gdn', 'gmf');
// INSERT INTO `ebtekarthon`.`contacts` (`logo`, `url`) VALUES ('fm', 'fmf');
// INSERT INTO `ebtekarthon`.`contacts` (`logo`, `url`) VALUES ('cbn ', 'vbm');

