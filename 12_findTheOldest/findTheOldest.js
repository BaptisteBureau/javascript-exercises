const findTheOldest = function(people) {
    let aged = people.map(obj => {
        let end = obj.yearOfDeath === undefined ? new Date().getFullYear() : obj.yearOfDeath
        let age = end - obj.yearOfBirth
        return {...obj, age: age}
    })

    return aged.reduce((previous, current) => {
        if (current.age > previous.age) {
            return current
        } else {
            return previous
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
