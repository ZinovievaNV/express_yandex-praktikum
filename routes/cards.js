const cardsRouter = require('express').Router();
const parser = require('../modules/parser');

const cards = parser.parse('cards.json');

cardsRouter.get('/', (req, res) => {
  res.send(cards);
});
module.exports = cardsRouter;
