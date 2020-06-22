const usersRouter = require('express').Router();
const {users} = require('../modules/usersParse');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const {id} = req.params;

  for (let item of users) {
    if (id === item._id) {
      console.log(`Пользователь с таким ID: ${id} = ${item['_id']}`);
      res.send(item);
      return;
    }
  }
  res.status(404).send({"message": "Нет пользователя с таким id"});
});

module.exports = usersRouter;