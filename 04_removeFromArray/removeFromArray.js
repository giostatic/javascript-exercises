const removeFromArray = function(array, removedItem){
    let arrayWithoutRemovedItem = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] == removedItem || array[i] === removedItem){
            array.filter(array[i]);
            arrayWithoutRemovedItem.push(array);
            return arrayWithoutRemovedItem;
        } else {
            return array;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
