// В якості ДЗ, необхідно вирішити дві наступні задачі:

// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

const firstString = prompt("Введіть текст"),
  secondString = prompt("Введіть текст"),
  thirdString = prompt("Введіть текст");

if (firstString !== null && secondString !== null && thirdString !== null) {
  console.log(firstString + secondString + thirdString);
} else {
  console.log("Ви відмінили ввід");
}

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const number = +prompt("Введіть п'ятизначне число");
if (99999 >= Math.abs(number) && Math.abs(number) >= 10000 && !isNaN(number)) {
  console.log(`${number}`.split("").join(" "));
} else {
  console.log("Помилка");
}
