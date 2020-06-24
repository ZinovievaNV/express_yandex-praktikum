const express = require('express');

const { PORT = 3000 } = process.env;
const path = require('path');

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.all('*', (req, res, next) => {
  if (req.method !== 'GET' || req.url !== '/') {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    next();
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
