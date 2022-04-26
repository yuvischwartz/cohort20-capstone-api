var express = require('express');
var router = express.Router();

const {Category, Question, Answer} = require('../lib/models')

// REST
// CREATE POST
// UPDATE PUT
// READ GET
// DELETE DELETE

router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll()
    res.json(categories)
});
// dont forget to add here: the same for
// // questions
// // answers


// create a question
router.post('/categories/:categoryId/questions', async function(req, res, next) {
    // req.body.questionText
    console.log('req.body', req.body)
    console.log('req.params', req.params)

    // questionText, categoryId
    let question = await Question.create({questionTxt: req.body.questionTxt, categoryId: req.params.categoryId})
    // res.json(categories)
    // add this insted:
    // res.json({})
    res.json(question)
    
});

router.get('/categories/:categoryId/questions', async function(req, res, next) {
    // req.body.questionText
    console.log('req.params', req.params)

    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}})
    // res.json(categories)
    res.json(questions)
});

// Create similar API routes for questions and answers

//Answers:
router.get('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    // req.body.questionText
    console.log('req.params', req.params)

    let answers = await Answer.findAll({where: {categoryId: req.params.categoryId, questionId: req.params.questionId}})
    // res.json(categories)
    res.json(answers)
});

// create an answer:
router.post('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    // req.body.questionText
    console.log('req.body', req.body)
    console.log('req.params', req.params)

    // questionText, categoryId
    let answer = await Answer.create({answerTxt: req.body.answerTxt, categoryId: req.params.categoryId, questionId: req.params.questionId})
    // res.json(categories)
    // add this insted:
    // res.json({})
    res.json(answer)
    
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({api: true})
});

module.exports = router;