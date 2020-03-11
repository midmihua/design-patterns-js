class MyCalculator {

    constructor(init = 0) {
        this.result = init;
    }

    add(value) {
        this.result += value;
        return this;
    }

    sub(value) {
        this.result -= value;
        return this;
    }
}

module.exports = {
    MyCalculator
}
