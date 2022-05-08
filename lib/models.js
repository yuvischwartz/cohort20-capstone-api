const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM

class Category extends Model {

}

Category.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Category', // We need to choose the model name
});

class Question extends Model {

}

Question.init({
    // Model attributes are defined here
    questionTxt: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Question', // We need to choose the model name
});

class Answer extends Model {

}
Answer.init({
    // Model attributes are defined here
    answerTxt: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Answer', // We need to choose the model name
});

Question.hasMany(Answer, {foreignKey: 'questionId'});
Answer.belongsTo(Question, {foreignKey: 'questionId'});

Category.hasMany(Question, {foreignKey: 'categoryId'});
Question.belongsTo(Category, {foreignKey: 'categoryId'});

// const seedCategories = async () => {
//     let categories = await Category.findAll({})
//     if(categories.length == 0){
//         await Category.create({name: 'Category 1'})
//         await Category.create({name: 'Category Two'})
//         await Category.create({name: 'Category Three'})
//         await Category.create({name: 'Category Four'})
//         await Category.create({name: 'Category Five'})
//     }
// };

// setTimeout(() => {
//     seedCategories()
// }, 5000)


// sequelize.sync({alter: true});


let seedCategories = async () => {
    let categories = await Category.findAll({});
    if (categories.length == 0) {
        await Category.create({ name: 'Decorations' });
        await Category.create({ name: 'Cake' });
        await Category.create({ name: 'Food' });
        await Category.create({ name: 'Party Rentals' });
        await Category.create({ name: 'Photography' });
    }
}

seedCategories()

sequelize.sync({ alter: true }); 
//this row will sync the data with my sql
// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    Category, Answer, Question
};