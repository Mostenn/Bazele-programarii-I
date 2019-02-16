'use strict'

//data отвечает за данные которые передаются из инпута
//res отвечает за передачу результата
//arr отвечает за передачу массива
var data, res, arr, l;
//чтение данных из инпута
function readData(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    data = elem.value;
    return data;
};
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
    let str = data;
    arr = str.split(' ');
    arr = arr.map(parseFloat).filter(Number); //фильтруем числа
    return arr;
}
//преобразование строки в массив чисел
function stringNumb(data) {
    let str = data;
    arr = str.split('');
    arr = arr.map(parseFloat).filter(Number); //фильтруем числа
    return arr;
}
//преобразование строки в массив из цифр введеного числа
function numberToArr(data){
    let str = data;
    arr = str.split(' ');
    arr = arr.map(parseFloat).filter(Number);
    console.log(arr);
}
//сортировка массива, от большего к меньшему числу a[0] > a[1] > a[i]
function sortArr(arr){
    function sortNumbers(a, b){
        if (a < b) return -1;
        if (a > b) return 1;        
    }
    arr.sort(sortNumbers); // получили массив от меньшего к большему числу
    arr.reverse(); //меняем порядок элементов на обратный
    l = arr.length; //индекс последнего элемента
    return arr, l;
}
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
function task_3(a){
    readData(a);
    string(data);
    sortArr(arr);
    //индекс последнего эелемента массива = длина массива - 1
    //вычитаем из самого большого элемента самый маленький a[0] - a[i]
    res = arr[0] - arr[arr.length - 1];    
    result(a, res);
}
// самое большое число из цифр введенного числа
function task_4(a){
    readData(a);
    numberToArr(data);
    stringNumb(data);
    sortArr(arr);
    res = arr.join('');    
    result(a, res);
}