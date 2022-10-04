const random = (min, max) => return Math.floor(Math.random() * (max - min + 1)) + min;
random(2,22);

const lenghtCheck = (String, Lenght) => {
  if (String.lenght < Lenght){true}
  else{false}
}

lenghtCheck('Тестовая строка', 25);
