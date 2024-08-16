//Objects
//key-value pairs in curly braces

const myObj = {name: "Dave"}
// console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat","Sleep","Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function(){
        return `Time for ${this.beverage.morning}`;
    }
}

// console.log(anotherObj.action())

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrrooooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.wheels);


