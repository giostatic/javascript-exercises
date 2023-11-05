
const repeatString = function(string, times){
    var returnString = '';
    if (i < 0){
        return 'ERROR';
    } else {
        for (let i = 0; i < times; i++){
            returnString += string;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
