// // This file deals with connecting to the database
// const {Sequelize} = require('sequelize');
// // You can choose to connect to sqlite here if you wish to
// // Also, if you are using mysql on your local machine you need to update the credentials below
// const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:Rootmysql123@localhost/cohort12a-capstone-api', {logging: false});

// //Make sure you run this: npm install sqlite3 --save
// // const sequelize = new Sequelize({
// //     dialect: 'sqlite',
// //     storage: 'path/to/database.sqlite'
// // });

// module.exports = { sequelize };


// This file deals with connecting to the database
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:Rootmysql123@localhost/cohort20-capstone', {logging: false});
module.exports = {sequelize};