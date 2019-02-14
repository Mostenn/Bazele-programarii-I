var data, res;

function readData(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    data = elem.value;
    return data;    
};

function result(a, res) {
    let elem = document.getElementById(a).getElementsByClassName('result')[0];
    elem.innerHTML = res;
    
}

function reset(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    elem.value = "";
    
}

function task_1(a) {
    readData(a);
    let m = data * 12; //months
    let d = data * 365; //days
    let h = data * 8760; //hours
    res = "Months " + m + " Days " + d + " Hours " + h;
    result(a, res);
}
function task_2(a){
    readData(a);
    res = data / 2;
    result(a, res);
}