class Employee {
    constructor(name) {
        this.name = name;
    }

    getEmployeeName() {
        return this.name;
    }
}

class EmployeeFactory {

    // Some complex logic can be there
    // ...
    //////////////////////////////////

    create(name) {
        return new Employee(name);
    }
}

class Vendor {
    constructor(name) {
        this.name = name;
    }

    getVendorName() {
        return this.name;
    }
}

class VendorFactory {

    // Some complex logic can be there
    // ...
    //////////////////////////////////

    create(name) {
        return new Vendor(name);
    }
}

module.exports = {
    EmployeeFactory,
    VendorFactory
}