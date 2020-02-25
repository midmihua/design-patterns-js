class Base {
    constructor(rate) {
        this.rate = rate;
    }

    getRate() {
        return this.rate;
    }
}

class FullTime extends Base {
    constructor() {
        super('$12');
    }
}

class PartTime extends Base {
    constructor() {
        super('$10');
    }
}

class Temporary extends Base {
    constructor() {
        super('$8');
    }
}

class Factory {

    createInstance(type) {
        switch (type) {
            case 'FullTime': return new FullTime();
            case 'PartTime': return new PartTime();
            case 'Temporary': return new Temporary();
            default: return null;
        }
    }
}

module.exports = {
    Factory,
    FullTime,
    PartTime,
    Temporary
};
