const removeFromArray = function(array, removedItem){
    const arrayWithoutRemovedItem = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] !== removedItem){
            arrayWithoutRemovedItem.push(array[i]);
        };
    };
};

// Do not edit below this line
module.exports = removeFromArray;
