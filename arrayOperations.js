function removeItemFromArray(array, itemToRemove) {
    return array.filter(item => item !== itemToRemove);
}

function addItemToArray(array, itemToAdd) {
    return [...array, itemToAdd];
}

function arrayIncludesItem(array, item) {
    return array.includes(item);
}

module.exports = {
    removeItemFromArray,
    addItemToArray,
    arrayIncludesItem
};