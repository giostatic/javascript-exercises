const removeFromArray = function(array, removedItem){
    const arrayWithoutRemovedItem = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] !== removedItem){
            arrayWithoutRemovedItem.filter(array[i]);
        }
        return arrayWithoutRemovedItem;
    };
};

// Do not edit below this line
module.exports = removeFromArray;
