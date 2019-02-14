var data;

function readData(a) {
    let elem = document.getElementById(a).getElementsByClassName('lab_input')[0];
    data = elem.value;
    return data;
};
function result(a,result){
    let elem = document.getElementById(a).getElementsByClassName('result').getElementsByTagName('span')[0];
    elem.value = (result);
}

function lab_1_t1(a) {
    readData(a);
    // console.log(data);
    let d,m,h;
    d = data * 365;
    m = data * 12;
    h = data * 8760;
    result = ('string');
}