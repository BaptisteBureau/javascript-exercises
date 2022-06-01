const removeFromArray = function(array, ...things) {
    console.log(things)
    return array.filter(value => {
        return !things.some(thing => thing === value)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
