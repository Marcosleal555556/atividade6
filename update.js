var mysql = require('mysql2');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "marcos",
database:"mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!")
    var sql = "UPDATE customers SET addres = 'Canyon 123' WHERE adress = 'Valley 345'";
    con.query(sql, function (err, result){
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated");
    });
  
  
    });
