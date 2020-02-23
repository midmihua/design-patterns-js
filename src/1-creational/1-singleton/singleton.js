module.exports = class Singleton {

    constructor(args = {}) {
        if (!!Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.args = args;
    }

    getArgs() {
        return this.args;
    }
};
