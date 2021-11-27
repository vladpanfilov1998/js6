//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let lengthFirst = 'hello world';
console.log(lengthFirst.length);

let lengthSecond = 'lorem ipsum';
console.log(lengthSecond.length);

let lengthThird = 'javascript is cool';
console.log(lengthThird.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'


let lengthFirst = 'hello world';
let upFirst = lengthFirst.toUpperCase();
console.log(upFirst);

let lengthSecond = 'lorem ipsum';
let upSecond = lengthSecond.toUpperCase();
console.log(upSecond);

let lengthThird = 'javascript is cool';
let upThird = lengthThird.toUpperCase();
console.log(upThird);


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lengthFirst = 'HELLO WORLD';
let lowerFirst = lengthFirst.toLowerCase();
console.log(lowerFirst);

let lengthSecond = 'LOREM IPSUM';
let lowerSecond = lengthSecond.toLowerCase();
console.log(lowerSecond);

let lengthThird = 'JAVASCRIPT IS COOL';
let lowerThird = lengthThird.toLowerCase();
console.log(lowerThird);


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str) => {
    return str.split(' ');
}

let str = 'Каждый охотник желает знать';

let arr = stringToarray(str);
console.log(arr);
document.write(arr);  // ['Каждый', 'охотник', 'желает', 'знать']

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substr(0, length);
};
let str = 'Каждый охотник желает знать';
document.write(delete_characters(str, 7)); // Каждый

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
let str = "HTML JavaScript PHP";
console.log(insert_dash(str));
document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstUp = (str) => {
    return str[0].toUpperCase() + str.slice(1)
};
document.write(firstUp(str));
console.log(firstUp(str));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
document.write(capitalize(str));
console.log(capitalize(str));