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

/*

initialize all individual data points
    eg. tomatos(5), chickenLegs(15), etc

in format: 
    LOCK TABLES `type` WRITE;
    INSERT INTO `type` VALUES (id, data1, data2),(id, data1, data2), etc... ; 
    UNLOCK TABLES;
    
*/