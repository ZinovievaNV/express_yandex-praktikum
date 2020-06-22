const cardsRouter = require('express').Router();
const {cards} = require('../modules/cardsParse');

cardsRouter.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = cardsRouter;
