class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initState = state;
    }

    update(action) {
        switch (action.type) {
            case 'INC':
                this.state = ++this.state;
                break;
            case 'DEC':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default:
                this.state = this.initState;
        }
    }
}

module.exports = {
    Subject,
    Observer
};
