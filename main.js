'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n))
};
function hiddenNumber() {
  const hiddenNum = Math.floor(Math.random() * 100);
  function getNum() {
    let number = (prompt("Угадай число от 1 до 100"));

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
        getNum();
      }
    };
    result();
  }
  getNum();
}
hiddenNumber();
