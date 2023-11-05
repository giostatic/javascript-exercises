const arr = [];

const repeatString = function(string, times) {
    for (let i = 0; i < times; i++){
        arr.push(string);
    }
};
arr.join('');
// Do not edit below this line
module.exports = repeatString;
