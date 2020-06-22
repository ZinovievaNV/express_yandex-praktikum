const path = require('path');
const fs = require('fs');
const usersPath = path.join(__dirname, '../data/users.json');
module.exports.users = JSON.parse(fs.readFileSync(usersPath, { encoding: 'utf8' }));