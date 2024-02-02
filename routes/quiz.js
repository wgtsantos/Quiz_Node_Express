const express = require('express');
const router = express.Router();
const questions = require('../data/questions'); // Ajuste o caminho conforme necessário


// Rota para exibir o quiz
router.get('/', (req, res) => {
    res.render('quiz', { questions });
});

// Rota para receber respostas
router.post('/', (req, res) => {
    const userAnswers = req.body;
    let score = 0;

    questions.forEach((question, index) => {
        if (userAnswers[`question${index}`] === question.answer) {
            score++;
        }
    });

    res.render('result', { score, total: questions.length }); // renderize uma página de resultado
});

module.exports = router;