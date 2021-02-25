exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    return 0;
};
