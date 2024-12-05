use costgeauxdb;
DROP PROCEDURE IF EXISTS alter_if_exists;
DROP PROCEDURE IF EXISTS alter_if_exists2;
DELIMITER $$ CREATE PROCEDURE alter_if_exists() BEGIN IF EXISTS (
    SELECT *
    FROM information_schema.tables
    WHERE table_schema = 'costgeauxdb'
        AND table_name = 'cart'
) THEN
ALTER TABLE cart DROP FOREIGN KEY cart_ibfk_1;
ALTER TABLE cart DROP FOREIGN KEY cart_ibfk_2;
END IF;
END $$ DELIMITER;
DELIMITER $$ CREATE PROCEDURE alter_if_exists2() BEGIN IF EXISTS (
    SELECT *
    FROM information_schema.tables
    WHERE table_schema = 'costgeauxdb'
        AND table_name = 'orderstock'
) THEN
ALTER TABLE orderstock DROP FOREIGN KEY orderstock_ibfk_1;
ALTER TABLE orderstock DROP FOREIGN KEY orderstock_ibfk_2;
ALTER TABLE orderstock DROP FOREIGN KEY orderstock_ibfk_3;
END IF;
END $$ DELIMITER;
CALL alter_if_exists();
CALL alter_if_exists2();
DROP TABLE if exists product;
DROP TABLE IF EXISTS employee;
DROP TABLE if EXISTS customer;
DROP TABLE IF EXISTS supplier;
DROP TABLE if EXISTS cart;
DROP TABLE IF EXISTS orderstock;
CREATE TABLE Employee(
    e_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    e_name VARCHAR(30) NOT NULL,
    e_City VARCHAR(30) NOT NULL,
    e_State VARCHAR(20) NOT NULL,
    e_Position VARCHAR(30) NOT NULL
);
ALTER TABLE employee AUTO_INCREMENT = 1000;
CREATE TABLE Customer(
    c_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    c_name VARCHAR(30) NOT NULL,
    c_City VARCHAR(30) NOT NULL,
    c_State VARCHAR(20) NOT NULL
);
ALTER TABLE customer AUTO_INCREMENT = 100;
CREATE TABLE Supplier(
    s_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    s_name VARCHAR(30) NOT NULL,
    s_City VARCHAR(30) NOT NULL,
    s_State VARCHAR(30) NOT NULL,
    s_Stock int NOT NULL CHECK (s_Stock > 0)
);
CREATE TABLE Product(
    p_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    p_name varchar(20) NOT NULL,
    price float NOT NULL CHECK (price > 0),
    p_Quantity int NOT NULL CHECK (p_Quantity > 0),
    p_section varchar(20) NOT NULL
);
CREATE TABLE Cart(
    cart_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    customer_id int NOT NULL,
    product_id int NOT NULL,
    item_count int NOT NULL CHECK (item_count > 0),
    total_price float NOT NULL CHECK (total_price > 0),
    foreign key (customer_id) references Customer(c_id),
    foreign key (product_id) references Product(p_id)
);
CREATE TABLE OrderStock(
    order_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    employee_id int NOT NULL,
    supplier_id int NOT NULL,
    product_id int NOT NULL,
    item_count int NOT NULL CHECK (item_count > 0),
    total_price float NOT NULL CHECK (total_price > 0),
    foreign key (employee_id) references Employee(e_id),
    foreign key (supplier_id) references Supplier(s_id),
    foreign key (product_id) references Product(p_id)
);
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('apple', '2.00', '45', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('orange', '1.00', '40', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('banana', '4.00', '35', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('grape', '7.00', '50', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('blueberry', '2.50', '30', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('strawberry', '2.99', '45', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('peach', '3.99', '40', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('mango', '3.49', '29', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('pineapple', '5.99', '30', 'Produce Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('lamb', '5.00', '39', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('chicken breast', '1.99', '69', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('steak', '3.99', '49', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('drumsticks', '7.00', '49', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('new york strip', '3.50', '19', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('sirloin', '2.99', '27', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('ground beef', '1.99', '46', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('wagyu', '7.00', '15', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('porkchops', '5.99', '40', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('bacon', '4.99', '25', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('arizona', '1.00', '35', 'Meat Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('gatorade', '6.99', '75', 'Drink Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('prime', '1.99', '35', 'Drink Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('bodyarmor', '3.99', '45', 'Drink Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('coke', '15.99', '50', 'Drink Section');
INSERT INTO product (p_name, price, p_Quantity, p_section)
VALUES ('sprite', '14.99', '50', 'Drink Section');
INSERT INTO employee (e_name, e_City, e_State, e_Position)
VALUES ('John', 'Baton Rouge', 'LA', 'manager');
INSERT INTO employee (e_name, e_City, e_State, e_Position)
VALUES ('Anthony', 'Dallas', 'TX', 'employee');
INSERT INTO employee (e_name, e_City, e_State, e_Position)
VALUES ('Chris', 'Covington', 'LA', 'cashier');
INSERT INTO employee (e_name, e_City, e_State, e_Position)
VALUES ('Jun', 'Houston', 'TX', 'janitor');
INSERT INTO employee (e_name, e_City, e_State, e_Position)
VALUES ('Alex', 'New York City', 'NY', 'employee');
INSERT INTO customer (c_name, c_City, c_State)
VALUES ('Ryan', 'Homa', 'LA');
INSERT INTO customer (c_name, c_City, c_State)
VALUES ('Jessica', 'San Antonio', 'TX');
INSERT INTO customer (c_name, c_City, c_State)
VALUES ('Robert', 'Lake Charles', 'LA');
INSERT INTO customer (c_name, c_City, c_State)
VALUES ('Kenny', 'Austin', 'TX');
INSERT INTO customer (c_name, c_City, c_State)
VALUES ('Alexis', 'Trenton', 'NJ');
INSERT INTO Supplier (s_name, s_City, s_State, s_Stock)
VALUES ('FoodFactory', 'Atlanta', 'GA', '14');
INSERT INTO Supplier (s_name, s_City, s_State, s_Stock)
VALUES ('Kirkland', 'Miami', 'FL', '25');
INSERT INTO Supplier (s_name, s_City, s_State, s_Stock)
VALUES ('Meat Distributor', 'San Diego', 'CA', '610');
INSERT INTO Supplier (s_name, s_City, s_State, s_Stock)
VALUES ('US Foods', 'Richmond', 'VA', '28');
INSERT INTO Supplier (s_name, s_City, s_State, s_Stock)
VALUES ('Food Group', 'Galveston', 'TX', '79');
-- Step 1: Purchase steak for customer "Ryan"
INSERT INTO Cart (customer_id, product_id, item_count, total_price)
SELECT c.c_id,
    p.p_id,
    2 AS item_count,
    2 * p.price AS total_price
FROM Customer c,
    Product p
WHERE c.c_name = 'Ryan'
    AND p.p_name = 'steak'
    AND p.p_Quantity >= 2;
SET SQL_SAFE_UPDATES = 0;
-- Update Product quantity for steak
UPDATE Product
SET p_Quantity = p_Quantity - 2
WHERE p_name = 'steak'
    AND p_Quantity >= 2;
SET SQL_SAFE_UPDATES = 1;
-- Step 2: Purchase strawberry for customer "Ryan"
INSERT INTO Cart (customer_id, product_id, item_count, total_price)
SELECT c.c_id,
    p.p_id,
    3 AS item_count,
    3 * p.price AS total_price
FROM Customer c,
    Product p
WHERE c.c_name = 'Ryan'
    AND p.p_name = 'strawberry'
    AND p.p_Quantity >= 3;
SET SQL_SAFE_UPDATES = 0;
-- Update Product quantity for strawberry
UPDATE Product
SET p_Quantity = p_Quantity - 3
WHERE p_name = 'strawberry'
    AND p_Quantity >= 3;
SET SQL_SAFE_UPDATES = 1;
-- Step 3: Display the Cart table
SELECT *
FROM Cart;