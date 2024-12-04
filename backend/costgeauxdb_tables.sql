use costgeauxdb;

DROP TABLE if exists product;
DROP TABLE IF EXISTS employee;
DROP TABLE if EXISTS customer;
DROP TABLE IF EXISTS supplier;

CREATE TABLE Employee(
    e_id int,
    e_name VARCHAR(30),
    e_City VARCHAR(30),
    e_State VARCHAR(20),
    e_Position VARCHAR(30),
    primary key (e_id)
);

CREATE TABLE Customer(
    c_id int,
    c_name VARCHAR(30),
    c_City VARCHAR(30),
    c_State VARCHAR(20),
    primary key (c_id)
);

CREATE TABLE Supplier(
    s_id int,
    s_name VARCHAR(30),
    s_City VARCHAR(30),
    s_State VARCHAR(30),
    s_Stock int,
    primary key(s_id)
);

CREATE TABLE Product(
    p_id int,
    p_name varchar(20),
    Price float,
    p_Quantity int,
    primary key (p_id)
);

INSERT INTO product VALUES ('1', 'apple', '2.00', '4');
INSERT INTO product VALUES ('2', 'orange', '1.00', '10');
INSERT INTO product VALUES ('3', 'banana', '4.00', '20');
INSERT INTO product VALUES ('4', 'grape', '7.00', '5');
INSERT INTO product VALUES ('5', 'blueberry', '2.50', '2');
INSERT INTO product VALUES ('6', 'strawberry', '2.99', '3');

