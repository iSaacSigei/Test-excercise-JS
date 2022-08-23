let numbers =[1,2,3,4,5,6,7];
let totalNums=numbers.reduce(adder,0)
function adder(total, elem,index, array){
    console.log(`our total is ${total}`)
    console.log(`out current element is ${elem}`)
    return total+=elem
}
console.log(totalNums)