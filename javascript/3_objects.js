// create a john object
// firstName and lastName are properties of the john object
// sayHi is a method of the john object
let john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1993,
    hobies: ['stamps', 'cycling', 'basketball'],
    isMarried: false,
    sayHi: function() {
        console.log(`Hi, my name is ${this.firstName}!`)
    }
}


// access object properties
console.log(john.firstName)
console.log(john.hobies)
console.log(john['birthYear'])
console.log(john['isMarried'])

// calling object methods
john.sayHi()


// add properties to objects
john.job = 'teacher'
john.livesIn = 'Chicago'
john.favFood = 'FishAndChips'
console.log(john)


// add methods to objects
// can't be an arrow function becuase the 'this' keyword will have the wrong context
john.calculateAge = function() {
    return 2019 - this.birthYear 
}
console.log(john.calculateAge())

// won't work as expected because using arrow function ('this' keyword has wrong context)
john.wontWork = () => {
    return this.hobies
}
console.log(john.wontWork())

// will work because arrow function is inside a function expression
john.willWork = function() {
    let innerFunc = () => {
        return this.hobies
    }
    return innerFunc()
}
console.log(john.willWork())
