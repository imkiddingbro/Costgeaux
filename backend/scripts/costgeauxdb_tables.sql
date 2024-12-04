use costgeauxdb;

CREATE TABLE Product(
    p_id int,
    p_name varchar(20),
    Price float,
    p_Quantity int,
    primary key (p_id),
    foreign key(s_id) references Supplier(s_id)
);

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