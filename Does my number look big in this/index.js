function narcissistic(n) {
    var convertedToString = String(n);
    var calculated = convertedToString
        .split('')
        .reduce(function (prev, curr) { return prev + Math.pow(Number(curr), convertedToString.length); }, 0);
    return n === calculated;
}