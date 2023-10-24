 // Hamster Class
class Hamster {
    constructor(name) {
        this.owner = "" 
        this.name = name 
    }
    static price = 15
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    static getPrice() {
        return this.price
    }
}
 
// Person Class
class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello ${this.name}!`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        if(this.age < 20) {
            this.height++
            this.weight++
        }
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        if (this.bankAccount >= Hamster.getPrice()) {
            this.hamsters.push(hamster)
            this.mood++
            this.bankAccount -= 10
        }
    }
}
const timmy = new Person("Timmy")
console.log(timmy)
for(let i = 0; i < 5; i++) {
    timmy.ageUp()
}
console.log(timmy.getAge())
for(let i = 0; i < 5; i++) {
    timmy.eat()
}
console.log(timmy.getWeight())
for(let i = 0; i < 5; i++) {
    timmy.exercise()
}
console.log(timmy.getWeight())
for(let i = 0; i < 9; i++) {
    timmy.ageUp()
}
console.log(timmy)
const gus = new Hamster("Gus")
gus.owner = timmy.name
timmy.buyHamster(gus)
console.log(timmy.hamsters)
for(let i = 0; i < 15; i++) {
    timmy.ageUp()
}
for(let i = 0; i < 2; i++) {
    timmy.eat()
}
console.log(timmy.getWeight())
for(let i = 0; i < 2; i++) {
    timmy.exercise()
}
console.log(timmy)

// Chef Makes Dinners
class Dinner {
    constructor(appetizer,entree,dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}
class Chef {
    constructor() {
        this.dinners = []
    }
    generateDinner(x,y,z) {
        const newDinner = new Dinner(x,y,z)
        this.dinners.push(newDinner)
    }
}
const john = new Chef()
john.generateDinner("Deviled Eggs", "Zucchini Lasagna", "Parfait")
john.generateDinner("Jalepeno Poppers", "Pasta Salad", "Tiramisu")
john.generateDinner("Stuffed Mushroom", "Pad Thai", "Creme BRulee")
console.log(john.dinners)

