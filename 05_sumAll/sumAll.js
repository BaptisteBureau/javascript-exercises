const sumAll = function(number1, number2) {
    if (typeof(number1) != "number" || typeof(number2) != "number") return "ERROR"
    let result = 0;
    let start = Math.min(number1, number2)
    if (start < 0) return "ERROR"
    let end = Math.max(number1, number2)
    for (let i=start; i<=end; i++){
        result +=i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
