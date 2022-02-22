function display(val){
    document.getElementById("id1").value += val;
}

function solve(){
    var result = document.getElementById("id1").value;
    var display = eval(result);
    document.getElementById("id1").value = display;
}

function cls(){
    document.getElementById("id1").value = "";
}