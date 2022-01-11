function receivesAFunction(cb) {
    cb();
}

const returnsANamedFunction = () => returnsANamedFunction;

const returnsAnAnonymousFunction = function() {
    return () => console.log('Anonymous function')
}