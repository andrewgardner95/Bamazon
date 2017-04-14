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

// Function that displays all of the items available for sale
function display () {
  connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      console.log("Welcome to Bamazon! Here's what we have for sale:")
      // for loop to loop through each item in the sql file for display
      for (var i=0; i < res.length; i++) {
        console.log("Item ID: " + res[i].id + '   ' + res[i].product_name + ' $' + res[i].price);
      }
      purchase();
  })
}

// function that executes customer purchase
function purchase () {
  // prompting the user what they want and what quantity
	inquirer.prompt([
  	{
    	type: "input",
    	name: "item",
    	message: "Which item do you want to purchase? (Please type item ID)"
  	}, {
    	name: "quantity",
    	type: "input",
    	message: "How many would you like?"
    // processing customer purchase
  	}]).then(function(answers) {
      var item = answers.item;
      var quantity = answers.quantity;

      // connecting the the database to check for availability and update stock quantity
      connection.query("SELECT stock_quantity, price FROM products WHERE id=" + item, function (err,res) {
        var stockQuantity = res[0].stock_quantity;

        if (stockQuantity - quantity < 0){
          console.log("Insufficient quantity!");
        }
        else {
          console.log("Success! Your order is on its way.");
        }

      });
	});
};

display();
