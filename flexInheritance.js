class Animals{
constructor(name, breed, age) { 
    this.name= name
    this.breed = breed
    this.age = age
    this.favFood = []
    
    }
    introduce() {
        return `Hi my name is ${this.name}`
    
    }
    addFood= (food) => { 
        this.favFood.push(food)
    
    }
    LoopThroughFoods() {
    console.log(this)
    this.favFood.forEach(this.logFood)
    
    } 
    LogFood=(food) => {
        console.log(this)
        console.log(`Hi my name is ${this.name} and I love to eat ${food}`)
    
    }
}
class Birds extends Animals{
    constructor(name, breed, age){
        super(name, breed, age)
        this.canFly=true
    }
    //or
    // constructor(...args){
    //     super(...args)
    //     this.canFly=true
    // }

}
    class Dog extends Animals {

    }
    class Cat  extends Animals{

    }
    
    let rose = new Cat('rose', 'domestic longhair', 9)
    let luke = new Cat('Luke', 'domestic short hair', 3)
    rose.addFood('fish')
    rose.addFood('chicken')
    rose.addFood('house plants')
    rose.addFood('brownies')