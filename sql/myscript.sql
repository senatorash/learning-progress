-- Data Definition Language 

CREATE DATABASE IF NOT EXISTS product_store;
USE product_store;

CREATE TABLE IF NOT EXISTS customers (
customer_id INT AUTO_INCREMENT PRIMARY KEY,
customer_name VARCHAR(20) NOT NULL,
customer_tel VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
product_id INT AUTO_INCREMENT PRIMARY KEY, 
product_name VARCHAR(20) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
CHECK (price >= 0)
);

CREATE TABLE IF NOT EXISTS orders (
	order_id INT  AUTO_INCREMENT PRIMARY KEY,
    quantity INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- INSERT INTO customers (
-- 	customer_name, customer_tel
-- ) VALUES (
-- 	"jomiloju", "+2345679362914"
-- );

-- SELECT * FROM customers;

-- ALTER TABLE customers ADD customer_name VARCHAR(20) NOT NULL;
-- ALTER TABLE customers ADD customer_tel VARCHAR(15) NOT NULL UNIQUE;

-- SHOW TABLES;
-- DESCRIBE customers;
-- DESCRIBE products;
-- DESCRIBE orders;

-- Data Manipulation Language
-- INSERT INTO customers (customer_name, customer_tel)
-- 	VALUES	
-- 	 ("Jomiloju Discount", "+2349099375915"), 
-- 	 ("Ashimi Seide", "+2349099378914"), 
--      ("Justice Emeka", "+2349076275708");
--      
-- INSERT INTO products (product_name, price) 
-- 		VALUES 
-- 			 ("Vasace shoe", "20000"),
--           ("Nike AF1", "500000"),
--           ("Cargo Pant", 25000);

SELECT * FROM customers;
SELECT * FROM products;

INSERT INTO  orders (quantity, total_amount, customer_id, product_id)
VALUES 
	(1, 2000, 1, 1),
	(2, 6000, 5, 2),
	(2, 40000, 10, 3),
	(1, 25000, 11, 3);
    
    SELECT * FROM orders;
    SELECT * FROM orders WHERE customer_id ="1"



