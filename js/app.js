

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if(pinString.length == 4){
        return pin;

    }else {
        getPin();
    }
}

function generatePin(){
   let pin = getPin();

   document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){

    const number = event.target.innerText;

    const calc = document.getElementById('typed-numbers');


    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }

    }else {
        const previousCalc    = calc.value; 
   
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }
} )

function veryfyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers  = document.getElementById('typed-numbers').value;
    
    if(pin == typedNumbers){
        document.getElementById('notify-sucess').style.display = "block";
        document.getElementById('notify-fail').style.display = "none";

    }else {
        document.getElementById('notify-fail').style.display = "block";
        document.getElementById('notify-sucess').style.display = "none";
    }
}