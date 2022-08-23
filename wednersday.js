// targetEment.addEventListener(event, callbackfun)
let num1;
let firstInput=document.getElementById('input1')
firstInput.addEventListener('input', handleNUm1);
function handleNUm1(e){
    num1=e.target.value;
    console.log(num1)


}
let num2;
let secondInput=document.getElementById('input2');
secondInput.addEventListener('input', handleNum2);
function handleNum2(e){
    num2=e.target.value;
    console.log(num2)
}
document.getElementById('btn').addEventListener('click',addNumber);
function addNumber(){
    let sum= parseInt(num1) +parseInt(num2);
    document.getElementById('results').innerHTML=sum
    
    
}