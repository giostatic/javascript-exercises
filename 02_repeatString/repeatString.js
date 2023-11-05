
const repeatString = function(string, times){
    return (times < 0) ? new Error('Error') :string.repeat(times);
};
console.log(repeatString());
// Do not edit below this line
module.exports = repeatString;
