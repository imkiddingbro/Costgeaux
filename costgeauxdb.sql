/*setup porting*/

/*

initialize all general type variables
   eg. meat(...), produce(...), etc(...)

in format:
    DROP TABLE IF EXISTS `type`;
    CREATE TABLE `type` (
    id dataType DEFAULT NULL,
    data1 dataType DEFAULT NULL,
    data2 dataType DEFAULT NULL
    ) Engine=InnoDB DEFAULT CHARSET=utf8mb4;

*/

DROP TABLE IF EXISTS `produce`;
CREATE TABLE `produce`(
    `p_id` smallint(5) DEFAULT NULL,
    `p_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `produce` WRITE;
INSERT INTO `produce` VALUES (11,'Tomato',30,0.30) , (12,'Lettuce',20,1.20) , (13,'Cucumber',20,1.00) , (14,'Apple',50,0.40) , (15,'Orange',50,0.50) , (16,'Bananas',25,2.30);
UNLOCK TABLES;

DROP TABLE IF EXISTS `meat`;
CREATE TABLE `meat`(
    `m_id` smallint(5) DEFAULT NULL,
    `m_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `meat` WRITE;
INSERT INTO `meat` VALUES (21,'Beef',15,8.99) , (22,'Chicken',30,3.99) , (23,'Pork',25,4.99) , (24,'Sausage',40,4.50);
UNLOCK TABLES;


DROP TABLE IF EXISTS `carbs`;
CREATE TABLE `carbs`(
    `c_id` smallint(5) DEFAULT NULL,
    `c_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `carbs` WRITE;
INSERT INTO `carbs` VALUES (31,'Bread',20,7.99) , (32,'Rice',45,5.99) , (33,'Pasta',25,2.99) , (34,'Oats',20,6.99);
UNLOCK TABLES;

DROP TABLE IF EXISTS `dairy`;
CREATE TABLE `dairy`(
    `d_id` smallint(5) DEFAULT NULL,
    `d_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `dairy` WRITE;
INSERT INTO `dairy` VALUES (41,'Milk',15,6.99) , (42,'Yogurt',20,3.99) , (43,'Cheese',20,5.99) , (44,'Ice Cream',10,10.99);
UNLOCK TABLES;

DROP TABLE IF EXISTS `snacks`;
CREATE TABLE `snacks`(
    `s_id` smallint(5) DEFAULT NULL,
    `s_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `snacks` WRITE;
INSERT INTO `snacks` VALUES (51,'Chips',30,5.99) , (52,'Popcorn',25,8.99) , (53,'Candy',40,1.99) , (54,'Jerky',25,9.99) , (55,'Cookies',20,9.99);
UNLOCK TABLES;

DROP TABLE IF EXISTS `beverages`;
CREATE TABLE `beverages`(
    `b_id` smallint(5) DEFAULT NULL,
    `b_name` varchar(10) DEFAULT NULL,
    `amount` smallint(5) DEFAULT NULL,
    `price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `beverages` WRITES;
INSERT INTO `beverages` VALUES (61,'Water',25,10.99) , (62,'Soda',25,12.99) , (63,'Juice',20,7.99) , (64,'Tea',20,8.99) , (65,'Coffee',40,5.99) , (66,'Beer',20,23.99);
UNLOCK TABLES;

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`(
    `i_id` smallint(5) DEFAULT NULL,
    `t_price` DECIMAL(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*

initialize all individual data points
    eg. tomatos(5), chickenLegs(15), etc

in format: 
    LOCK TABLES `type` WRITE;
    INSERT INTO `type` VALUES (id, data1, data2),(id, data1, data2), etc... ; 
    UNLOCK TABLES;
    
*/