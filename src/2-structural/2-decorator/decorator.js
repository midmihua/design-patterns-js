class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

// Decorator 1
function info(user) {
    user.info = function () {
        return `${user.name} is ${user.age} years old`;
    }
    return user;
}

// Decorator 2
function extra(user, options) {
    const { city = 'Kyiv', position = 'QA Engineer' } = options;
    user.city = city;
    user.position = position;
    return user;
}

module.exports = {
    User,
    info,
    extra
};
