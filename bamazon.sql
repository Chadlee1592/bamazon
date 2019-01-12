DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE IF NOT EXISTS product (
    item_id INT AUTO_INCREMENT,
    product VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    price decimal(6,2) NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO product (product, department, price, stock)
VALUE ("Monitor", "Electornics", 150, 10);

INSERT INTO product (product, department, price, stock)
VALUE ("Keyboard", "Electornics", 99, 18);

INSERT INTO product (product, department, price, stock)
VALUE ("Mouse", "Electornics", 50, 40);

INSERT INTO product (product, department, price, stock)
VALUE ("CPU", "Electornics", 259, 15);

INSERT INTO product (product, department, price, stock)
VALUE ("GPU", "Electornics", 359, 20);

INSERT INTO product (product, department, price, stock)
VALUE ("CPU Cooler", "Electornics", 30, 60);

INSERT INTO product (product, department, price, stock)
VALUE ("Headset", "Electornics", 40, 30);

INSERT INTO product (product, department, price, stock)
VALUE ("Computer Tower", "Electornics", 100, 20);

INSERT INTO product (product, department, price, stock)
VALUE ("Chair", "Household", 70, 9);

INSERT INTO product (product, department, price, stock)
VALUE ("Table", "Household", 300, 3);

SELECT product, department, price, stock FROM product WHERE item_id = 1;

SELECT stock FROM product where item_id = 1; 

UPDATE product
set
	stock = 10
where
	item_id = 1;
    
SELECT product, department, price, stock FROM product WHERE item_id = 1;
    
    
    
    
    
    


