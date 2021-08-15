import soma from './calculadora/somar.js'
import subtracao from './calculadora/subtrair.js';
import multiplicacao from './calculadora/multiplicar.js';
import divisao from './calculadora/dividir.js';

alert("Calculadora");
const operacao = prompt("Digite a operação soma (+), subtração (-), multiplicar (*) ou dividir (/)!!");

let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite um número"));


function calculo (numero1, numero2, operacao){
    if(operacao === "+") {
        let resultado = soma(numero1,numero2);
        return alert(`O resultado da soma é ${resultado}`);
}    else if (operacao == "-") {
        let resultado = subtracao(numero1,numero2);
        return alert(`O resultado da subtração é ${resultado}`);
    } else if  (operacao == "*") {
        let resultado = multiplicacao(numero1,numero2);
        return alert(`O resultado da multiplicação é ${resultado}`);
    } else if (operacao == "/") {
        let resultado = divisao(numero1,numero2);
        return alert(`O resultado da divisão é ${resultado}`);
    } else {
    alert("Não é possivel realizar tal operação");
}}

calculo(numero1,numero2,operacao);





