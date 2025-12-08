//first one
let num = Number(prompt("Введите число от 1 до 12:"));
let month;

switch (num) {
    case 1: month = "январь"; break;
    case 2: month = "февраль"; break;
    case 3: month = "март"; break;
    case 4: month = "апрель"; break;
    case 5: month = "май"; break;
    case 6: month = "июнь"; break;
    case 7: month = "июль"; break;
    case 8: month = "август"; break;
    case 9: month = "сентябрь"; break;
    case 10: month = "октябрь"; break;
    case 11: month = "ноябрь"; break;
    case 12: month = "декабрь"; break;
    default: month = "Неверный номер месяца";
}

console.log(month);

//second one

let input = prompt("Веди год месяц и число")
let parts = input.split(" ");
let year = parts[0];
let monthNum = Number(parts[1]);
let day = parts[2];

let monthName;

switch (monthNum) {
    case 1: monthName = "января"; break;
    case 2: monthName = "февраля"; break;
    case 3: monthName = "марта"; break;
    case 4: monthName = "апреля"; break;
    case 5: monthName = "мая"; break;
    case 6: monthName = "июня"; break;
    case 7: monthName = "июля"; break;
    case 8: monthName = "августа"; break;
    case 9: monthName = "сентября"; break;
    case 10: monthName = "октября"; break;
    case 11: monthName = "ноября"; break;
    case 12: monthName = "декабря"; break;
    default: monthName = "неизвестного месяца";
}

console.log("Сегодня " + day + " " + monthName + " " + year + " года.");
