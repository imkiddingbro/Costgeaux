# Costgeaux

## Introduction 

 The Costgeaux project uses both MySQL and Javascript to run the backend components for a grocery store.

## Prerequisites

Before running this project you must first have these installed on your own system:

- [Visual Studio Code](https://code.visualstudio.com/download) - Used to develop the files in this program. You can use any editor, this is what our group used collectively.
- [Node.js](https://nodejs.org/) - Version 14 or higher.
- [npm](https://www.npmjs.com/) - This is included with Node.js.
- [MySQL](https://www.mysql.com/) - Version 15.1 Distrib 10.4.32-MariaDB or higher
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) - Version 8.0.40 or higher

## Getting Started

Follow these steps to run the project.

### Backend

1. Download SQLTools from the extensions tab in Visual Studio Code.
2. Download SQLTools MySQL/MariaDB/TIDB from the extensions tab in Visual Studio Code.
3. Go to the SQLTools tab and add a new connection.
4. Make sure to create a database with the name costgueaxdb in the MySQL Workbench.
5. Create a new MySQL connection from the SQLTools tab in Visual Studio Code.
    - Connection name: MySQL Local
    - Port: 33060
    - Database: costgeauxdb
    - Username: root
    - Password mode: Save as plaintext in settings
    - Password: password
    - Authentication Protocol: xprotocol
    - Connection Timeout: 30
    - Everything else should be left as default
6. If you are struggling to run the sql file in MySQL Workbench, Go to MySQL Workbench and first input these lines in Query 1.
    - "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
       flush privileges;"
    - Open the sql file provided (costgeauxdb_tables.sql).
    - Run using the sql file provided to test if the workbench is working correctly.

### Running the script



### Accessing the Application User Interface

- The interface will be in the command line interface so in Visual Studio Code open up the terminal and input the data!

### Additional Notes

## Usage

- Use the terminal to input the information asked.

## Authors

- Anthony Marino
- John Braham
- Yejun Song
- Christian Allison