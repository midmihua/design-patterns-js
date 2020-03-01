class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class PersonFactory {

    constructor() {
        this.persons = [];
    }

    init(name, age) {
        let newPerson = this.getPerson(name);

        if (newPerson) {
            return newPerson;
        }

        newPerson = new Person(name, age);
        this.persons.push(newPerson);
        return newPerson;
    }

    getPerson(name) {
        return this.persons.find(person => person.name === name);
    }
}

module.exports = {
    PersonFactory
};
