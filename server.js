const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const quizRoutes = require('./routes/quiz');
app.use(quizRoutes);
