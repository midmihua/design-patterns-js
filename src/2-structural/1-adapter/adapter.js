// Old interface
function OldCalc(n1, n2, operation) {

    switch (operation) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        default: return NaN;
    }
}

// New interface
function NewCalc() {

    return {
        add(n1, n2) {
            return n1 + n2;
        },
        sub(n1, n2) {
            return n1 - n2;
        }
    }
}

// Adapter
function Adapter() {

    return {
        OldCalc(n1, n2, operation) {
            switch (operation) {
                case '+': return NewCalc().add(n1, n2);
                case '-': return NewCalc().sub(n1, n2);
                default: return NaN;
            }
        }
    }
}

module.exports = {
    OldCalc,
    NewCalc,
    Adapter
};
