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
  var sql = "DELETE FROM  customers WHERE adress = 'Mountain 21'";
  con.query(sql, function (err, result){
if (err) throw err;
console.log("Number of records deleted: " + result.affectedRows);
  });

  });
