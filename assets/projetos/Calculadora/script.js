const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber ="";
let firstOperand = null;
let operator = null;
let restart = false;

//ATUALIZANDO TELA
function updateResult(originClear = false){
    result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

//INSERINDO OS DÍGITOS NA TELA
function addDigit(digit){
    if(digit == "," && (currentNumber.includes(",") || !currentNumber)) return;

    if(restart){
        currentNumber = digit;
        restart = false;
    }
    else{
        currentNumber += digit;
    }

    updateResult();
}

//OPERADOR DO CÁLCULO
function setOperator(newOperator){
    if (currentNumber){
        firstOperand = parseFloat(currentNumber.replace(",", "."));
        currentNumber = "";
    }

    operator = newOperator;
}

//FAZENDO O CÁLCULO ATRAVÉS DO OPERADOR SELECIONADO
function calculate(){
    if(operator == null || firstOperand == null) return;
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultValue;

    switch(operator){
        case "+":
            resultValue = firstOperand + secondOperand;
            break;
        case "-":
            resultValue = firstOperand - secondOperand;
            break;
        case "x":
            resultValue = firstOperand * secondOperand;
            break;
        case "/":
            resultValue = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    if(resultValue.toString().split(".")[1]?.lenght > 5){
        currentNumber = parseFloat(resultFloat.toFixed(5)).toString();
    }
    else{
        currentNumber = resultValue.toString();
    }

    operator = null;
    firstOperand = null;
    restart = true;
    percentageValue = null;
    updateResult();
}

//OPERAÇÃO DE PORCENTAGEM
function setPercentage(){
    let result = parseFloat(currentNumber) / 100;

    if(["+", "-"].includes(operator)){
        result = result * (firstOperand || 1);
    }

    if(result.toString().split(".")[1]?.length > 5){
        result = result.toFixed(5).toString();
    }

    currentNumber = result.toString();
    updateResult();
}

function clearCalculator(){
    currentNumber = "";
    result.innerText = "";
}

//AÇÕES DOS BOTÕES
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        if(/^[0-9,]+$/.test(buttonText)){
            addDigit(buttonText);
        }
        else if(["+", "-", "x", "/"].includes(buttonText)){
            setOperator(buttonText);
        }
        else if(buttonText == "%"){
            setPercentage();
        }
        else if(buttonText == "="){
            calculate();
        }
        else if(buttonText == "C"){
            clearCalculator();
        }
        else if(buttonText == "+-"){
            currentNumber = (parseFoat(currentNumber || firstOperand) * -1).toString();
            updateResult();
        }
    })
})