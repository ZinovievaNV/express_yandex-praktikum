const path = require('path');
const fs = require('fs');

module.exports.parse = (fileName) => {
  const usersPath = path.join(__dirname, `../data/${fileName}`);
  let parseResult;
  let fileContents;

  try {
    fileContents = fs.readFileSync(usersPath, { encoding: 'utf8' });
  } catch (e) {
    return { error: 'Не удалось прочитать файл' };
  }

  try {
    parseResult = JSON.parse(fileContents);
  } catch (e) {
    return { error: 'Неверный формат файла' };
  }

  if (!Array.isArray(parseResult)) {
    return { error: 'Не верный формат файла' };
  }

  return parseResult;
};
