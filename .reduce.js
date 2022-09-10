let numbers =[1,2,3,4,5,6,7];
let totalNums=numbers.reduce(adder,0)
function adder(total, elem){
    
    return total+=elem
}
console.log(totalNums)