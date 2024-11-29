/*setup porting*/

/*
Basic Inventory

dept_nums:
    produce: 1
    meat: 2
    carbs: 3
    dairy: 4
    snacks: 5
    beverages: 6
 */

DROP TABLE IF EXISTS `produce`;
CREATE TABLE `produce`(
    `p_id` smallint(5) DEFAULT NULL,
    `p_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `produce` WRITE;
INSERT INTO `produce` VALUES (11,'Tomato',30,0.30,1) , (12,'Lettuce',20,1.20,1) , (13,'Cucumber',20,1.00,1) , (14,'Apple',50,0.40,1) , (15,'Orange',50,0.50,1) , (16,'Bananas',25,2.30,1);
UNLOCK TABLES;

DROP TABLE IF EXISTS `meat`;
CREATE TABLE `meat`(
    `m_id` smallint(5) DEFAULT NULL,
    `m_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `meat` WRITE;
INSERT INTO `meat` VALUES (21,'Beef',15,8.99,2) , (22,'Chicken',30,3.99,2) , (23,'Pork',25,4.99,2) , (24,'Sausage',40,4.50,2);
UNLOCK TABLES;


DROP TABLE IF EXISTS `carbs`;
CREATE TABLE `carbs`(
    `c_id` smallint(5) DEFAULT NULL,
    `c_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `carbs` WRITE;
INSERT INTO `carbs` VALUES (31,'Bread',20,7.99,3) , (32,'Rice',45,5.99,3) , (33,'Pasta',25,2.99,3) , (34,'Oats',20,6.99,3);
UNLOCK TABLES;

DROP TABLE IF EXISTS `dairy`;
CREATE TABLE `dairy`(
    `d_id` smallint(5) DEFAULT NULL,
    `d_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `dairy` WRITE;
INSERT INTO `dairy` VALUES (41,'Milk',15,6.99,4) , (42,'Yogurt',20,3.99,4) , (43,'Cheese',20,5.99,4) , (44,'Ice Cream',10,10.99,4);
UNLOCK TABLES;

DROP TABLE IF EXISTS `snacks`;
CREATE TABLE `snacks`(
    `s_id` smallint(5) DEFAULT NULL,
    `s_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `snacks` WRITE;
INSERT INTO `snacks` VALUES (51,'Chips',30,5.99,5) , (52,'Popcorn',25,8.99,5) , (53,'Candy',40,1.99,5) , (54,'Beef Jerky',25,9.99,5) , (55,'Cookies',20,9.99,5);
UNLOCK TABLES;

DROP TABLE IF EXISTS `beverages`;
CREATE TABLE `beverages`(
    `b_id` smallint(5) DEFAULT NULL,
    `b_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL,
    `dept_num` smallint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `beverages` WRITE;
INSERT INTO `beverages` VALUES (61,'Water',25,10.99,6) , (62,'Soda',25,12.99,6) , (63,'Juice',20,7.99,6) , (64,'Tea',20,8.99,6) , (65,'Coffee',40,5.99,6) , (66,'Beer',20,23.99,6);
UNLOCK TABLES;

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`(
    `i_id` smallint(5) DEFAULT NULL,
    `t_numOfItems` mediumint(9) DEFAULT NULL,
    `t_price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


/* Start of Employee/Manager section */

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`(
    `e_id` mediumint(9) DEFAULT NULL,
    `e_name` varchar(15) DEFAULT NULL,
    `dept_name` varchar(15) DEFAULT NULL,
    `salary` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `employee` WRITE;
INSERT INTO `employee` VALUES (1001,'Anthony','Produce',55000) , (1002,'Yejun','Meat',55000) , (1003,'John','Carbs',55000) , (1004,'Greyson','Dairy',50000) , (1005,'Thomas','Snacks',50000) , (1006,'Charles','Beverages',50000);
UNLOCK TABLES;

DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`(
    `man_id` mediumint(9) DEFAULT NULL,
    `man_name` varchar(15) DEFAULT NULL,
    `dept_name` varchar(15) DEFAULT NULL,
    `salary` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `manager` WRITE;
INSERT INTO `manager` VALUES (2001,'Christian','Produce',85000) , (2002,'Jay','Meat',85000) , (2003,'Jacob','Carbs',85000) , (2004,'Mark','Dairy',83000) , (2005,'Cameron','Snacks',83000) , (2006,'Nick','Beverages',83000);
UNLOCK TABLES;

DROP TABLE IF EXISTS `manages`;
CREATE TABLE `manages`(
    `man_id` mediumint(9) DEFAULT NULL,
    `e_id` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `manages` WRITE;
INSERT INTO `manages` VALUES (2001,1001) , (2002,1002) , (2003,1003) , (2004,1004) , (2005,1005) , (2006,1006);
UNLOCK TABLES;