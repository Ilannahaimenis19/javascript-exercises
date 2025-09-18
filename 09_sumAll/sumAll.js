const sumAll = function(num1, num2) {
    const smallest = Math.min(num1, num2);
    const biggest = Math.max(num1, num2);
    let numbers = [];
        for (let num = smallest; num <= biggest; num++) {
            numbers.push(num)
        } 
        return numbers.reduce((acc, num) => acc + num, 0);
};
// Do not edit below this line
module.exports = sumAll;
