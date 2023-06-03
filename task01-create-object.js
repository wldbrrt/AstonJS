// Creating with object literal
const counter1 = {
    value: 0,

    get getValue() {
        return this.value
    },

    set setValue(value) {
        this.value = value;
    },
};

//Creating with "new"
const counter2 = new Object;
counter2.value = 0;
counter2.getValue = function() {
    return this.value
};
counter2.setValue = function (value) {
    this.value = value;
};


//Creating with Object.create()
const counter3 = Object.create({}, {
    value: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0,
    },
    getValue: {
        get: function () {
            return this.value;
        },
        configurable: false,
    },
    setValue: {
        set: function (value) {
            this.value = value;
        },
        configurable: false,
    }
});

//Creating with constructor function
function Counter (value) {
    this.value = value;
    this.getValue = function () {
        return this.value;
    };
    this.setValue = function (value) {
        this.value = value;
    };
};

const counter4 = new Counter();

//Creating with Class 
class CounterClass {
    constructor(value) {
        this.value = value;
    }

    get getValue() {
        return this.value;
    }

    set setValue(value) {
        this.value = value;
    }
}

const counter5 = new CounterClass(0);


