

let input = document.getElementById('input');
buttons = document.querySelectorAll('button');
let calculator = '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        if(buttonText=='X'){
            buttonText = '*';
            calculator += buttonText;
            input.value = calculator;
        }
        else if(buttonText=='%'){
            buttonText = '/';
            calculator += buttonText;
            input.value = calculator;
        }
        else if(buttonText=='C'){
            calculator = "";
            input.value = calculator;

        }
        else if(buttonText=='='){
            input.value = eval(calculator);

        }
        else{
            calculator += buttonText;
            input.value = calculator;
        }

    })
    // form.reset()
}

