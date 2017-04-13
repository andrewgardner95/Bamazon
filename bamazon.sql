CREATE DATABASE Bamazon;

use Bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Baseball Bat", "Sports", 20.50, 90), ("Basketball", "Sports", 9.95, 150), 
		("iPhone", "Technology", 290.00, 40), ("Wipe Board", "Office Supplies", 19.00, 110), 
        ("Baseball Mitt", "Sports", 18.50, 80), ("Hockey Puck", "Sports", 5.50, 200), 
        ("Printer", "Technology", 54.00, 75), ("Pencil Sharpener", "Office Supplies", 9.75, 120), 
        ("Mountain Bike", "Sports", 520.95, 18), ("Stapler", "Office Supplies", 4.75, 125);