function printFullName(){
    firtsName='Sigei';
    lastName ='Isaac';
    fullName= `${firtsName} ${lastName}`
    return fullName;
    

}
console.log(printFullName());


///part II
function printFullName(firstName='isaac', lastName='sigei'){
    fullName=  `${firstName} ${lastName}`
    
    return fullName
}
console.log(printFullName());

//part III
function sumNumber(num1=10, num2=30){
    sum=num1+num2;
    return sum
}
console.log(sumNumber())

//area of rectangle
function areaOfRectangle(length, width){
    area=length*width
    return area
}
console.log(areaOfRectangle(10,6))
// perimeter of the triangle
function perimeterOfRectangle(length, width){


perimeter=2*(length+width)
return perimeter
}
console.log(perimeterOfRectangle(30,40))

//volume of a rectangular prisim
function volumeOfPrism(length, width, height){
    volume= length*width*height
    return volume
}
console.log(volumeOfPrism(10,5,30))

//area of a circle
function areaOfCircle(r){
    area=Math.PI*r**2
    return area
}
console.log(areaOfCircle(7))


//level 2 excercise
function calcDensity(mass, volume){
    let density=mass/volume
    return density
}
console.log(calcDensity(100, 22.3))
 
//BMI Calculator
function calcBmiIndex(weight, height){
    BMI=weight/(height*height)
    if(BMI<=18.5){
        return 'underweight'
    }
    if(BMI<=24.9){
        return "Normal weight"
    }
    if (BMI<=29.9){
        return 'Overweight'
        }
    if (BMI >=30){
        return 'Obesse'
    }

    }
    console.log(calcBmiIndex(78, 2))
 
//season function
function checkSeason(month){
    if (month<=3){
        return 'winter'
    }
    if (month<=6){
        return 'spring'
    }
    if(month<=9){
        return 'summer'
    } 
    if(month>9){
        return'Autum'
    }
}
console.log(checkSeason(3))



//function to calculate the equation og a line
function solveInEquation(X1,Y1, X2, Y2){
    let a= (X2-X1)/2
    let b=(Y2-Y1)/2
    let eqn =`${a}X ${b} ${c} `
    return eqn
    
}
console.log(solveInEquation(2,1,-3,-4))