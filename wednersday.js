document.getElementById('input1').addEventListener('input', (e)=>{
   num1=e.target.value;
})


document.getElementById('input2').addEventListener('input', (e)=>{
    num2=e.target.value;
})

document.getElementById('btn').addEventListener('click',()=>{
    result=parseInt(num1)+parseInt(num2)
    document.getElementById('results').innerHTML=result
})
    