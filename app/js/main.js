'use strict'

//data отвечает за данные которые передаются из инпута
//res отвечает за передачу результата
//arr отвечает за передачу массива
//numb отвечает за передачу числа
var data, res, arr, l, numb;

//--------------впомогательные функции----------

//
//TODO фильтрация букв в веденных строках при преобразовании
//

//чтение данных из инпута
function readData(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    data = elem.value;
    return data;
}
//вывод результата
function result(a, res) {
    let elem = document.getElementById(a).getElementsByClassName('result')[0];
    elem.innerHTML = res;

}
//очистка введенных данных и результата прошлого вычесления
function reset(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    elem.value = "";
    let elem1 = document.getElementById(a).getElementsByClassName('result')[0];
    elem1.innerHTML = "";
}
//преобразование строки введенных чисел через пробел в массив чисел
function string(data) {
    arr = data.split(' ');
    arr = arr.map(parseFloat); //фильтруем числа
    return arr;
}
//строка в 1 число
function number(data) {
    numb = parseInt(data);
    return numb;
}
//преобразование строки в массив чисел
function stringNumb(data) {
    arr = data.split('');
    arr = arr.map(parseFloat); //фильтруем числа
    return arr;
}
//преобразование строки в массив из цифр введеного числа
function numberToArr(data) {
    arr = data.split(' ');
    arr = arr.map(parseFloat);
    return arr;
}
//сортировка массива, от большего к меньшему числу a[0] > a[1] > a[i]
function sortArr(arr) {
    function sortNumbers(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
    }
    arr.sort(sortNumbers); // получили массив от меньшего к большему числу
    arr.reverse(); //меняем порядок элементов на обратный
    l = arr.length; //индекс последнего элемента
    return arr, l;
}
//----------Решение задач------------------

//конвертер, введенное кол-во лет преобразуем в дни, месяцы, и часы
function task_1(a) {
    readData(a);
    let m = data * 12; //months
    let d = data * 365; //days
    let h = data * 8760; //hours
    res = "Months " + m + " Days " + d + " Hours " + h;
    result(a, res);
}
//считаем среднее значение
function task_2(a) {
    readData(a);
    string(data);
    let summa = arr.reduce(function (sum, current) {
        return sum + current
    });
    res = summa / arr.length;
    result(a, res);
}
// самая большая разница между введенными числами
function task_3(a) {
    readData(a);
    string(data);
    sortArr(arr);
    //индекс последнего эелемента массива = длина массива - 1
    //вычитаем из самого большого элемента самый маленький a[0] - a[i]
    res = arr[0] - arr[arr.length - 1];
    result(a, res);
}
// самое большое число из цифр введенного числа
function task_4(a) {
    readData(a);
    numberToArr(data);
    stringNumb(data);
    sortArr(arr);
    res = arr.join('');
    result(a, res);
}
// уровень оценки введенной учеником
function task_5(a) {
    readData(a);
    number(data);
    switch (numb) {
        case 1:
            res = "Неудовлетворительная оценка";
            break;
        case 2:
            res = "Неудовлетворительная оценка";
            break;
        case 3:
            res = "Неудовлетворительная оценка";
            break;
        case 4:
            res = "Неудовлетворительная оценка";
            break;
        case 5:
            res = "Удовлетворительная оценка";
            break;
        case 6:
            res = "Удовлетворительная оценка";
            break;
        case 7:
            res = "Хорошая оценка";
            break;
        case 8:
            res = "Хорошая оценка";
            break;
        case 9:
            res = "Отличная оценка";
            break;
        case 10:
            res = "Отличная оценка";
            break;
        default:
            res = "Я таких оценок не знаю";

    }
    result(a, res);
}

function task_6(a) {
    readData(a);
    stringNumb(data);
    let s = arr[0];
    let d = arr[1];
    let e = arr[2];
    switch (s) {
        case 1:
            s = "Сто";
            break;
        case 2:
            s = "Двести";
            break;
        case 3:
            s = "Триста";
            break;
        case 4:
            s = "Четыреста";
            break;
        case 5:
            s = "Пятьсот";
            break;
        case 6:
            s = "Шестьсот";
            break;
        case 7:
            s = "Семьсот";
            break;
        case 8:
            s = "Восемьсот";
            break;
        case 9:
            s = "Девятьсот";
            break;
    }
    switch (d) {
        case 0:
            "";
            break;
        case 1:
            switch (e) {
                case 1:
                    d = "одиннадцать";
                    e = "";
                    break;
                case 2:
                    d = "двенадцать";
                    e = "";
                    break;
                case 3:
                    d = "тринадцать";
                    e = "";
                    break;
                case 4:
                    d = "четырнадцать";
                    e = "";
                    break;
                case 5:
                    d = "пятнадцать";
                    e = "";
                    break;
                case 6:
                    d = "шестнадцать";
                    e = "";
                    break;
                case 7:
                    d = "семнадцать";
                    e = "";
                    break;
                case 8:
                    d = "восемьнадцать";
                    e = "";
                    break;
                case 9:
                    d = "девятнадцать";
                    e = "";
                    break;
            }
            break;
        case 2:
            d = "двадцать";
            break;
        case 3:
            d = "тридцать";
            break;
        case 4:
            d = "сорок";
            break;
        case 5:
            d = "пятьдесят";
            break;
        case 6:
            d = "шестьдесят";
            break;
        case 7:
            d = "семьдесят";
            break;
        case 8:
            d = "восемьдесят";
            break;
        case 9:
            d = "девяносто";
            break;
    }
    switch (e) {
        case 0:
            e = "";
            break;
        case 1:
            e = "один";
            break;
        case 2:
            e = "два";
            break;
        case 3:
            e = "три";
            break;
        case 4:
            e = "четыре";
            break;
        case 5:
            e = "пять";
            break;
        case 6:
            e = "шесть";
            break;
        case 7:
            e = "семь";
            break;
        case 8:
            e = "восемь";
            break;
        case 9:
            e = "девять";
            break;
    }
    res = s + " " + d + " " + e;
    result(a, res);
}
//сумма все чисел до числа n
function task_7(a) {
    readData(a);
    number(data);
    let cet = 0;
    let necet = 0;
    let all = 0;
    for (var i = 0; i <= numb; i++) {
        if (i % 2 == 0) {
            cet = cet + i;
        }
        if (i % 2 != 0) {
            necet = necet + i;
        }
        all = all + i;
    }
    res = "Сумма четных: " + cet + ", Сумма нечетных: " + necet + ", Сумма всех: " + all + " чисел. ";
    result(a, res);
}
//задача с процентами
function task_8(a) {
    readData(a);
    string(data);
    let month = arr[1];
    if (typeof month == "undefined") {
        month = 0;
    }
    var depozit = arr[0];
    console.log(depozit, arr[1]);
    for (var i = 0; i < month; i++) {
        var procent = depozit * 0.02;
        depozit = depozit + procent;
    }

    res = "Ваш депозит через " + month + " месяцев составит: " + Math.round(depozit * 1000) / 1000 + " лей(ев)";
    result(a, res);
}
// Количество цифр в числе
function task_9(a) {
    readData(a);
    stringNumb(data);
    res = arr.length;
    result(a, res);
}
// количество четных и нечетных цифр в введнном числе
function task_10(a) {
    readData(a);
    stringNumb(data);
    let cet = [];
    let necet = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            cet = cet.concat(arr[i]);
        }
        if (arr[i] % 2 != 0) {
            necet = necet.concat(arr[i])
        };

    }
    res = "Четные: " + cet.join(" ") + " , Нечетные: " + necet.join(" ");
    result(a, res);

}
//решение квадратного уравнения

function task_11(a) {
    readData(a);
    string(data);
    var x, x1, x2, f, e, q, d;
    f = arr[0];
    e = arr[1];
    q = arr[2];
    console.log(q);
    var d = Math.pow(e,2) - (4 * f * q);
    if (d > 0) {
        x1 = (-e + Math.sqrt(d)) / (2 * f);
        x2 = (-e - Math.sqrt(d)) / (2 * f);
        // res = "Корни уравнения" + x1 + " , " + x2;
        console.log(x1);
    } else if (d = 0) {
        x = (-e) / (2 * f);
        res = "Корень уравнения" + x;
    } else if (d < 0) {
        res = "Уравнение не имеет корней";
    }
    console.log(x1, x2, x, d);
    result(a, res);
}
//площадь и периметр прямоугольника
function task_12(a) {

}