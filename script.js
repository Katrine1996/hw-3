
//* Задание 1

let password = ('Пароль');
let userPassword = (prompt ('Введите пароль'));

if (password === userPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

//* Задание 2

let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно.');
} else {
    console.log('Неверно.');
}

//* Задание 3

let d = 10;
let e = 200;


if (d>=100 || e>=100) {
    console.log('Правильно!');
} else {
    console.log('Неправльно!');
}

//*Задание 4

let a = '2';
let b = '3';

a = 2;
b = 3;

alert(a + b);

//*Задание 5

let monthNumber = String(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        alert('Зима')
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна')
        break;
    case '6':
    case '7':
    case '8':
        alert('Лето')
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень')
        break;        
    
        default:
            alert('Ввел что-то не то')
        break;
}
 
