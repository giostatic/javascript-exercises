const removeFromArray = function(array, removedItem){
    let arrayWithoutRemovedItem = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] !== removedItem){
            return array;
        } else {
            array.filter(array[i]);
            arrayWithoutRemovedItem.push(array);
            return arrayWithoutRemovedItem;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
