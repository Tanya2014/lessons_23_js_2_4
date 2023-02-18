"use strict"

//Урок 1
//Варіант 1
//Оператор додавання

/*let varOne = "10";
let varTwo = "5";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);*/

//Це єдиний оператор який не змінює тип данних. Буде завжди рядковим і наступний рядок стає до попереднього.
//Тому в консоль виведе 35-22
//console.log('35' + - '22');

//Варіант 2
//Оператор множення
//Оператор множення змінює тип данних з рядка на числове. Вірно заптсано
/*let varOne = '10';
let varTwo = '5';
let varSumm = varOne * varTwo;
console.log(typeof varSumm);
console.log(varSumm);

console.log('35' * "22");*/

//Варіант 3. Помилка. Інкремент і декремент можна застосовувати к змінним.
//console.log('558' > 22++);

//Варіант 4. Помилка
//Використаний суфіксний запис. То спочатку newUsers отримує 0, а потім збільшується на 1
//Якщо поставити ++ перед usersCounter ,то newUsers буде 1
/*let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
console.log(usersCounter);*/

// Варіант 5
// Оператор '!' в першому випадку і в другому true
//Потім спрацює перший  && так як він головніший за ||
// На виході буде 11
console.log(!false && 11 || 18 && !'');

//Варіант 6
//Повертає перший оперант, якщо він не null і не undefined
let names = 0;
console.log(names ?? "Без ім'я");

//Урок 2
//Варіант 1
//Жорстке порівняння не переводить тип данних. Число і рядок не можливо порівняти
if (1 === '1') {
   console.log('true');
} else {
   console.log('false');
}
//Варіант 2
// == переводить тип данних, рядок стає числовим
if (5 == '5') {
   console.log('true!');
} else {
   console.log('false!');
}
//Варіант 3
//let message = (92 > '11' && 58 < 100) ? 'true!' : 'false!';

let message;

if (92 > '11') {
   message = 'true!';
} else if (58 < 100) {
   message = 'false!';
}

/*let messageOne = 'Hello!';
let messageTwo;
if (5 > 1) {
   messageTwo = ', Вася';
} else {
   messageTwo = ', Юля';
}

messageOne += messageTwo;
console.log(messageOne);*/

//Варіант 4
// 0 це false. " " це не пусте місце є пробіл і буде true
/*if (0) {
   console.log('False');
} else if (" ") {
   console.log('True');
}*/

// Урок 3
//Задача 1
//Цикл While

/*let num = 1;
while (num < 6) {
   console.log(num);
   num++;
}*/

/*let num = 5;
while (num) {
   console.log(num);
   num--;
}*/

/*let numbers = 0;
do {
   console.log(numbers);
   numbers++;
} while (numbers < 6);*/

/*for (let x = 0; x < 6; x++) {
   console.log(x);
}*/

//Задача 2
//Остання цифра буде 1, ящо зміння буде дорівнювати 0, це буде false і цикл не буде виконуватися.
/*let num = 8;
while (num) {
   console.log(num);
   num--;
}*/

//Задача 3

/*for (let num = 0; num < 3; num++) {
   console.log(`Число: ${num}`);
}*/

/*let num = 0;
do {
   console.log(`Число: ${num}`);
   num++;
} while (num < 3);*/

//Задача 4
//Цикл 1
/*firstFor: for (let num = 0; num < 2; num++) {

   //Цикл 2
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break firstFor;
      }
      console.log(size);
   }
}*/

//Урок 4
//Задача 1. Отримати вірне значення округлення
let numTwo = 1.005 + Number.EPSILON;
let numOne = Math.round(numTwo * 100) / 100;
console.log(numOne);

//Задача 2.Отримати число 135,58 із рядка 

/*let value = parseFloat("135.58px");
console.log(typeof value);
console.log(value);*/

//Задача 3.

let value = 58 + 'Фрилансер';
if (58 + 'Фрилансер' !== NaN) {
   console.log(isFinite('Результат NaN'));

}

//Задача 4. Знайти максимальне число
console.log(Math.max(10, 58, 39, -150, 0));

//Задача 5, Округлити число 58,858 до числа 58

let y = 58.858;
console.log(Math.floor(y));

//Урок 5.

// Задача 1
// Запис вірна буде тільки з зворотніми лапками
/*let fls = 'фрілансер';
let text = `Привіт! Я ${fls}`;
console.log(text);*/

//Задача 2. Отримати символ 'н' рядка

/*let text = 'фрілансер';
console.log(text[5]);*/

//Задача 3. Вірно? Ні. Оператор + не переводить тип рядка з рядкового на числове.

/*let text = 123 + '456';
console.log(text);*/

//Задача 4. Отримати рядок в верхньому регістрі

/*let text = 'фрілансер';
console.log(text.toUpperCase());*/

//Задача 5. Отримати 'лан' із

/*let text = 'фрілансер';
console.log(text.slice(3, 6));*/

//Задача 6. true || false. Починається з 3 позиції.

/*let text = 'фрілансер';
console.log(text.includes('лан', 4));*/















