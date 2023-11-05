const removeFromArray = function(array, removedItem){
    let arrayWithoutRemovedItem = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] === removedItem){
            arrayWithoutRemovedItem.push(array[i]);
        }
        return arrayWithoutRemovedItem;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
