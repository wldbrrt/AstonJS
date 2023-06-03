//Creating with function declaration
function makeCounter1 () {
    let count = 0;
    return function () {
        return count++
    };
};

//Creating with function expression
const makeCounter2 = function () {
    let count = 0;
    return function () {
        return count++
    };
};

//Creating with arrow function
const makeCounter3 = () => {
    let count = 0;
    return function () {
        return count++
    };
};

//Creating with named function expresison
const makeCounter4 = function creatingCounter () {
    let count = 0;
    return function () {
        return count++
    };
}

//Creating IIFE function
const makeCounter5 = (function () {
    let count = 0;
    return function () {
        return count++
    };
})()

//Calling as callback
function useMakeCounter (callback) {
    return callback()
}

