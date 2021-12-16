const mysql = require("mysql2");
const express = require("express");
 
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
 
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "127.0.0.1",
  user: "root",
  database: "users",
  port: 3306,
  password: ""
});
 
app.set("view engine", "hbs");
 
// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM users_list", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
          users: data
      });
    });
});
// возвращение формы для добавления данных
app.get("/create", function(req, res){
    res.render("create.hbs");
});
// получение отправленных данных и добавление их в БД 
app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    const organization = req.body.organization;
    const department = req.body.department;
    const time = req.body.time;
    pool.query("INSERT INTO users_list (name, age, organization, department, time) VALUES (?,?,?,?,?)", [name, age, organization, department, time], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});
 
// получение id редактируемого пользователя, получение его из бд и отправление с формой редактирования
app.get("/edit/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM users_list WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit.hbs", {
        user: data[0]
    });
  });
});
// получение отредактированных данных и отправление их в БД
app.post("/edit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const age = req.body.age;
  const id = req.body.id;
  const organization = req.body.organization;
  const department = req.body.department;
  const time = req.body.time;
   
  pool.query("UPDATE users_list SET name=?, age=? organization=?, department=?, time=? WHERE id=?", [name, age, organization, department, time, id], function(err, data) {
    if(err) {
      console.log(err);
    };
    console.log(data);
    res.redirect("/");
  });
});
 
// получение id удаляемого пользователя и удаление его из бд
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM users_list WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});