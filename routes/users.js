const usersRouter = require('express').Router();
const parser = require('../modules/parser');

const users = parser.parse('users.json');

usersRouter.get('/', (req, res) => {
  if (users.error) {
    return res.status(500).send(users);
  }
  return res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  if (users.error) {
    return res.status(500).send(users);
  }
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((el) => el._id === id);

  if (user) {
    // console.log(`Пользователь с таким ID: ${id} = ${user._id}`);
    return res.send(user);
  }

  return res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = usersRouter;
