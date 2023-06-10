//Create object person
/* const person = {
    name: 'Jack',
    lastName: 'Black',
    age: '25',
    getFullName: function () {
        return (`${this.name} ${this.lastName}`);
    }
}; */

const person = new Object;

person.name = 'Jack';
person.lastName = 'Black';
person.getFullName = function () {
    return (`${this.name} ${this.lastName}`)
};


//Create object person2 with person as prototype
const person2 = Object.create(person)

//Add new method to person
person.logInfo = function () {
    return 'Some logInfo';
};

//Create class PersonThree

class PersonThree  {
    constructor (name, lastName, age) {
        this._name = name,
        this.lastName = lastName;
        this.age = age;
    };

    get name () {
        return this._name
    };

    set name (value) {
        return this._name = value
    };
};

const person4 = new PersonThree('Jane', 'Doe', 44)

//Extending from PersonThree

class PersonFour extends PersonThree {
    constructor (name, lastName, age, status) {
        super(name, lastName, age);
        this._status = status;
    };

    get status () {
        return this._status
    };

    set status (value) {
        this._status = value
    }
}

const person5 = new PersonFour ('John', 'Doe', 50, 'Alive');
