const path = require('path');
const fs = require('fs');
const cardsPath = path.join(__dirname, '../data/cards.json');
module.exports.cards = JSON.parse(fs.readFileSync(cardsPath, { encoding: 'utf8' }));