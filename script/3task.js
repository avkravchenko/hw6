/* Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. 



const one = 4;
const two = 5;

function first(one){
    function second(two) {
        return one + two;
    }
    return second(two);
}

console.log(first(one));*/