const removeFromArray = function(array, removedItem){
    for (let i = 0; i < array.length; i++){
        if(array[i] == removedItem){
            array.filter(array[i]);
        }
        return array;
    };
};

// Do not edit below this line
module.exports = removeFromArray;
