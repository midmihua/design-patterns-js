function DatabaseFunction(host, port) {
    this.host = host;
    this.port = port;
}

DatabaseFunction.prototype.getUrl = function () {
    return `https://${this.host}:${this.port}`;
}

class DatabaseClass {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }

    getUrl() {
        return `https://${this.host}:${this.port}`;
    }
}

module.exports = {
    DatabaseFunction,
    DatabaseClass
}
