//Calculator program

const display = document.getElementById("display");

function showresult(input){
    display.value += input;

    if (input === '√'){
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
        display.value = "error";
    }
}