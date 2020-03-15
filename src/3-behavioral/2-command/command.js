class Operation {

    constructor(value = 1) {
        this.init = value;
    }

    square() {
        return this.init ** 2;
    }

    cude() {
        return this.init ** 3;
    }
}

class Command {

    constructor(subject) {
        this.executedOperations = [];
        this.subject = subject;
    }

    execute(command) {
        this.executedOperations.push(command);
        return this.subject[command]();
    }
}

module.exports = {
    Operation,
    Command
};
