const checkInventory = (element,array) => array.includes(element);
let storeArr= ["milk", "eggs", "cheese", "butter"];
console.log(checkInventory("milk",storeArr)) // returns true because milk is in storeArr included.
console.log(checkInventory("tomatoes",storeArr)) // returns false because tomatoes is not in storeArr included.
