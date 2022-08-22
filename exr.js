function fullName(){
    let firstName='Isaac';
    let lastName='Sigei';
    return `My name is ${firstName} ${lastName}`;
}
console.log(fullName())


//exercise II

function biggerNUmber(){
    let a=70;
    let b=20
    if(a>b){
        return a
    }
    else{
        return b
    }
}
console.log(biggerNUmber())


//exercise III
const myRemainder= function(x,y){
    return x%y
}
console.log(myRemainder(34,6))

//arrow function
const remainder=(j,k)=>{
    return j%k;
}
console.log(remainder(34,6))