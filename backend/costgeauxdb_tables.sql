use costgeauxdb;

DROP PROCEDURE IF EXISTS alter_if_exists;
DROP PROCEDURE IF EXISTS alter_if_exists2;

DELIMITER $$

CREATE PROCEDURE alter_if_exists() 
BEGIN 
	IF EXISTS (SELECT * FROM information_schema.tables
			WHERE table_schema = 'costgeauxdb' AND table_name = 'cart') THEN
		ALTER TABLE cart DROP FOREIGN KEY cart_ibfk_1;
END IF;
END $$ 
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE alter_if_exists2() 
BEGIN 
IF EXISTS (
    SELECT * FROM information_schema.tables
    WHERE table_schema = 'costgeauxdb' AND table_name = 'orderstock') THEN
ALTER TABLE orderstock DROP FOREIGN KEY orderstock_ibfk_1;
END IF;
END $$ 
DELIMITER ;

CALL alter_if_exists();
CALL alter_if_exists2();
DROP TABLE if exists product;
DROP TABLE IF EXISTS employee;
DROP TABLE if EXISTS customer;
DROP TABLE IF EXISTS supplier;
DROP TABLE if EXISTS cart;
DROP TABLE IF EXISTS orderstock;
CREATE TABLE Employee(
    e_id int PRIMARY KEY AUTO_INCREMENT,
    e_name VARCHAR(30),
    e_City VARCHAR(30),
    e_State VARCHAR(20),
    e_Position VARCHAR(30)
);
CREATE TABLE Customer(
    c_id int PRIMARY KEY AUTO_INCREMENT,
    c_name VARCHAR(30),
    c_City VARCHAR(30),
    c_State VARCHAR(20)
);
CREATE TABLE Supplier(
    s_id int PRIMARY KEY AUTO_INCREMENT,
    s_name VARCHAR(30),
    s_City VARCHAR(30),
    s_State VARCHAR(30),
    s_Stock int
);
CREATE TABLE Product(
    p_id int PRIMARY KEY AUTO_INCREMENT,
    p_name varchar(20),
    Price float,
    p_Quantity int
);
CREATE TABLE Cart(
    cart_id int PRIMARY KEY AUTO_INCREMENT,
    customer_id int,
    item_count int,
    total_price float,
    foreign key (customer_id) references Customer(c_id)
);
CREATE TABLE OrderStock(
    order_id int PRIMARY KEY AUTO_INCREMENT,
    employee_id int,
    item_count int,
    total_price float,
    foreign key (employee_id) references Employee(e_id)
);

INSERT INTO product VALUES ('1', 'apple', '2.00', '4');
INSERT INTO product VALUES ('2', 'orange', '1.00', '10');
INSERT INTO product VALUES ('3', 'banana', '4.00', '20');
INSERT INTO product VALUES ('4', 'grape', '7.00', '5');
INSERT INTO product VALUES ('5', 'blueberry', '2.50', '2');
INSERT INTO product VALUES ('6', 'strawberry', '2.99', '3');
INSERT INTO product VALUES ('7', 'peach', '3.99', '4');
INSERT INTO product VALUES ('8', 'mango', '3.49', '3');
INSERT INTO product VALUES ('9', 'pineapple', '5.99', '1');
INSERT INTO product VALUES ('10', 'lamb', '5.00', '1');
INSERT INTO product VALUES ('11', 'chicken breast', '1.99', '4');
INSERT INTO product VALUES ('12', 'steak', '3.99', '2');
INSERT INTO product VALUES ('13', 'drumsticks', '7.00', '10');
INSERT INTO product VALUES ('14', 'new york strip', '3.50', '2');
INSERT INTO product VALUES ('15', 'sirloin', '2.99', '3');
INSERT INTO product VALUES ('16', 'ground beef', '1.99', '4');
INSERT INTO product VALUES ('17', 'wagyu', '7.00', '1');
INSERT INTO product VALUES ('18', 'porkchops', '5.99', '4');
INSERT INTO product VALUES ('19', 'bacon', '4.99', '8');
INSERT INTO product VALUES ('20', 'arizona', '1.00', '1');
INSERT INTO product VALUES ('21', 'gatorade', '6.99', '6');
INSERT INTO product VALUES ('22', 'prime', '1.99', '1');
INSERT INTO product VALUES ('23', 'bodyarmor', '3.99', '1');
INSERT INTO product VALUES ('24', 'coke', '15.99', '12');
INSERT INTO product VALUES ('25', 'sprite', '14.99', '12');

INSERT INTO employee VALUES ('1001', 'John', 'Baton Rouge', 'LA', 'manager');
INSERT INTO employee VALUES ('1002', 'Anthony', 'Dallas', 'TX', 'employee');
INSERT INTO employee VALUES ('1003', 'Chris', 'Covington', 'LA', 'cashier');
INSERT INTO employee VALUES ('1004', 'Jun', 'Houston', 'TX', 'janitor');
INSERT INTO employee VALUES ('1005', 'Alex', 'New York City', 'NY', 'employee');

INSERT INTO customer VALUES ('101', 'Ryan', 'Homa', 'LA');
INSERT INTO customer VALUES ('102', 'Jessica', 'San Antonio', 'TX');
INSERT INTO customer VALUES ('103', 'Robert', 'Lake Charles', 'LA');
INSERT INTO customer VALUES ('104', 'Kenny', 'Austin', 'TX');
INSERT INTO customer VALUES ('105', 'Alexis', 'Trenton', 'NJ');

INSERT INTO Supplier VALUES ('1', 'FoodFactory', 'Atlanta', 'GA', '14');
INSERT INTO Supplier VALUES ('2', 'Kirkland', 'Miami', 'FL', '25');
INSERT INTO Supplier VALUES ('3', 'Meat Distributor', 'San Diego', 'CA', '610');
INSERT INTO Supplier VALUES ('4', 'US Foods', 'Richmond', 'VA', '28');
INSERT INTO Supplier VALUES ('5', 'Food Group', 'Galveston', 'TX', '79');

INSERT INTO cart VALUES ('001', '101', '5', '17.00');
INSERT INTO cart VALUES ('002', '102', '14', '24.00');
INSERT INTO cart VALUES ('003', '103', '25', '69.00');
INSERT INTO cart VALUES ('004', '104', '3', '5.00');
INSERT INTO cart VALUES ('005', '105', '9', '14.00');

INSERT INTO orderstock VALUES ('001', '1001', '65', '1648.00');
INSERT INTO orderstock VALUES ('002', '1002', '100', '2837.00');
INSERT INTO orderstock VALUES ('003', '1003', '150', '3178.00');
INSERT INTO orderstock VALUES ('004', '1004', '300', '5738.00');
INSERT INTO orderstock VALUES ('005', '1005', '20', '800.00');







