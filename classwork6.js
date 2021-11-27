//- Дано список імен.
//    let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

let normName = (name) => {
    console.log(name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' '));
}
normName(name);

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArr = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    console.log(array);
    return array;
};
randomArr(size)


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let randomNewArr = (size) => {
    let arrayNew = [];
    for (let i = 0; i < size; i++) {
        arrayNew.push(Math.round(Math.random() * 100));
    }
    return arrayNew;
};

let arraySort = randomNewArr(20)
document.write(arraySort.sort((a, b) => a - b));
document.write(arraySort.sort((a, b) => b - a));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterArr = (size) => {
    let arrayFilter = [];
    for (let i = 0; i < size; i++) {
        arrayFilter.push(Math.round(Math.random() * 100));
    }
    return arrayFilter;
};

let arrayNewFilter = filterArr(20)
document.write(arrayNewFilter.filter(value => value % 2 === 0));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let strArr = (size) => {
    let arrayString = [];
    for (let i = 0; i < size; i++) {
        arrayString.push(Math.round(Math.random() * 100));
    }
    return arrayString.map(value => value.toString());
};

console.log(strArr(20));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'desc') {
        return arr.sort((a, b) => b - a);
    }
    return [];
};
sortNums(arr, direction);

//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration

let coursesSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesSort);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let longCourses = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(longCourses)

//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(res)
    return res
};
document.writeln(cutString('наслаждение',3))

