var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

// Displaying all of the items available for sale
connection.query("SELECT * FROM products", function display(err, res) {
  	if (err) throw err;
  	console.log(res[3].product_name);
});
