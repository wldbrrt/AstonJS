function bind01 (fn, context, ...args) {
    return function (...restArgs) {
        return fn.call(context, ...args.concat(restArgs));
    }
};

//Bind polyfill without usind call or apply methods
function bind02 (fn, context, ...args) {
    return function (...restArgs) {
        const keyID = Date.now().toString();
        context[keyID] = fn;
    
        const result = context[keyID](...args.concat(restArgs));
        delete context[keyID];
        return result;
    }
};


