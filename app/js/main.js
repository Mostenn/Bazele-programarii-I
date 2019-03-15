'use strict';

//data отвечает за данные которые передаются из инпута
//res отвечает за передачу результата
//arr отвечает за передачу массива
//numb отвечает за передачу числа
let data, data2, res, arr, arr2, l, numb;

//--------------впомогательные функции----------

//
// TODO фильтрация букв в веденных строках при преобразовании
// TODO Проверить работоспособность всех программ
//

//чтение данных из инпута
function readData(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    data = elem.value;
    return data;
}

function readData2(a) {
    let elem2 = document.getElementById(a).getElementsByClassName('lab_input')[1];
    data2 = elem2.value;
    return data2;
}
//вывод результата
function result(a, res) {
    let elem = document.getElementById(a).getElementsByClassName('result')[0];
    elem.innerHTML = res;

}
//очистка введенных данных и результата прошлого вычисления
function reset(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    elem.value = "";
    let elem1 = document.getElementById(a).getElementsByClassName('result')[0];
    elem1.innerHTML = "";
    let elem2 = document.getElementById(a).getElementsByClassName('lab_input')[1];
    elem2.value = "";
}
//преобразование строки введенных чисел через пробел в массив чисел
function string(data) {
    arr = data.split(' ');
    arr = arr.map(parseFloat); //фильтруем числа
    return arr;
}
//
function stringLetters() {
    if (!data2) {
        arr = data.split('');
    } else if (data2) {
        arr = data.split('');
        arr2 = data2.split('');
        return arr, arr2;
    }
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
//matrix
// (function () {
//     let table = document.createDocumentFragment();
//     let arr = [];
//     for (let i = 0; i < 2; i++) {
//         let tr = document.createElement('tr');
//         arr[i] = [];
//         for (let j = 0; j < 3; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j] = getRandom();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.getElementById('matrix').appendChild(table);

//     function getRandom() {
//         let min = 2;
//         let max = 15;
//         return Math.floor(Math.random() * (max - min)) + min;
//     }
// })();
//----------Решение задач------------------

//конвертер, введенное кол-во лет преобразуем в дни, месяцы, и часы
function task_1(a) {
    readData(a);
    let m = data * 12; //months
    let d = data * 365; //days
    let h = data * 8760; //hours
    res = "Months " + m + ", Days " + d + ", Hours " + h;
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
    for (let i = 0; i <= numb; i++) {
        if (i % 2 === 0) {
            cet = cet + i;
        }
        if (i % 2 !== 0) {
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
    let depozit = arr[0];
    console.log(depozit, arr[1]);
    for (let i = 0; i < month; i++) {
        let procent = depozit * 0.02;
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
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            cet = cet.concat(arr[i]);
        }
        if (arr[i] % 2 !== 0) {
            necet = necet.concat(arr[i])
        }

    }
    res = "Четные: " + cet.join(" ") + " , Нечетные: " + necet.join(" ");
    result(a, res);

}
//решение квадратного уравнения

function task_11(a) {
    readData(a);
    string(data);
    let f = arr[0],
        e = arr[1],
        q = arr[2],
        d;
    d = Math.pow(e, 2) - (4 * f * q);
    let x, x1, x2;
    if (d > 0) {
        x1 = (-e + Math.sqrt(d)) / (2 * f);
        x2 = (-e - Math.sqrt(d)) / (2 * f);
        res = "Корни уравнения " + x1 + " , " + x2;
    } else
    if (d === 0) {
        x = (-e) / (2 * f);
        res = "Корень уравнения " + x;
    } else if (d < 0) {
        res = "Уравнение не имеет корней";
    }
    result(a, res);
}
//площадь и периметр прямоугольника
function task_12(a) {
    readData(a);
    string(data);
    let p = arr[0];
    let q = arr[1]
    let area = p * q;
    let perimetr = 2 * (p + q);
    res = "Площадь: " + area + " " + "Периметр: " + perimetr;
    result(a, res);
}
//
function task_13(a) {
    readData(a);
    string(data);
    let n = arr.length;
    let e = Math.abs(arr[0]);
    for (let i = 1; i < n; i++) {
        let b = Math.abs(arr[i]),
            c = e;
        while (e && b) {
            e > b ? e %= b : b %= e;
        }
        e = Math.abs(c * arr[i]) / (e + b);
    }
    res = e;
    result(a, res);

}
//вывод значения функции f(x)
function task_14(a) {
    let fx = [];
    for (let i = -2; i <= 5; i++) {
        let f = 3 * (i * i) + i + 2;
        console.log(f);
        fx.push(f);
    }
    res = fx;
    result(a, res);
}
//
function task_15(a) {
    readData(a);
    string(data);
    let x = arr[0];
    let last = arr.length - 1;
    let y = arr[last];
    arr[0] = y;
    arr[last] = x;
    res = arr;
    result(a, res);

}
//
function task_16(a) {
    readData(a);
    string(data);
    for (let i = 1; i < arr.length - 1; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i] * arr[0];
        } else {
            arr[i] = arr[i] * arr[arr.length - 1];
        }
        console.log(i);
    }
    res = arr;
    result(a, res);
}
//
function task_17(a) {
    readData(a);
    readData2(a);
    string(data);
    let res1 = [];
    let res2 = [];
    let m = data2;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 1 && arr[i] <= m) {
            res1.push(arr[i]);
        } else {
            res2.push(arr[i]);
        }
    }
    res = "Есть в интервале: " + res1 + "; нет в интервале: " + res2;
    result(a, res);
}
//
function task_18(a) {
    readData(a);
    string(data);
    let cet = [];
    let necet = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            cet.push(arr[i]);
        } else {
            necet.push(arr[i]);
        }
    }
    res = "Четные: " + cet + ". Нечетные: " + necet;
    result(a, res);
}
//
function task_19(a) {
    readData(a);
    readData2(a);
    let rep = new RegExp([data2], 'gi');
    res = data.replace(rep, '');
    result(a, res);
}

//
function task_20(a) {
    readData(a);
    stringLetters();
    let gl = 0;
    let sogl = 0;
    let arrGl = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arrSogl = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrGl.length; j++) {
            if (arr[i] == arrGl[j]) {
                gl++;
            }
        }
        for (let k = 0; k < arrSogl.length; k++) {
            if (arr[i] == arrSogl[k]) {
                sogl++;
            }
        }
    }
    let sravn;
    if (gl == sogl) {
        sravn = '; Равное количество';
    } else {
        sravn = '; Не равное количество';
    }

    res = 'Гласных: ' + gl + ', Согласных: ' + sogl + sravn;
    result(a, res);

}
//
function task_21(a) {
    readData(a);
    let n = data.split(' ', 1);
    let nmb;

    function matrix(n) {
        let table = document.createDocumentFragment();
        let arr = [];
        for (let i = 0; i < n; i++) {
            let tr = document.createElement('tr');
            arr[i] = [];
            for (let j = 0; j < n; j++) {
                let td = document.createElement('td');
                td.innerHTML = arr[i][j] = getNumber();
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById('matrix').appendChild(table);

        function getNumber() {
            let m = 4;
            for (let u = 0; u < m; u++) {
                if (u == 0) {
                    return 2;
                }
                return u;
            }
        }
    }
    // console.log(n);
    matrix(n);
}
//
function task_22(a) {}
//
function task_23(a) {}
//
function task_24(a) {}