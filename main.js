'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n))
};
function hiddenNumber(hiddenNum, number) {
  hiddenNum = 66;
  number = (prompt("Угадай число от 1 до 100"));

  function result() {
    function alertMessage() {
      if (+number === hiddenNum) {
        return alert("Вы угадали!")
      } else if (!isNumber(number)) {
        return alert("Введи число!");
      } else if (number > hiddenNum) {
        return alert("Загаданное число меньше");
      } else if (number < hiddenNum) {
        return alert("Загаданное число больше");
      };

    };
    if (+number === hiddenNum) {
      return alertMessage();
    } else if (number === null) {
      return false;
    } else {
      alertMessage();
      hiddenNumber();
    }
  };
  result();
}
hiddenNumber();
