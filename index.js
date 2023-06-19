function myEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

function myMap(array, callback){
    let mappedArray = [];
    for(let i = 0; i < array.length; i++){
        let appliedElements = callback(array[i], i, array);
        mappedArray.push(appliedElements);
    }
    return mappedArray;
}

function myFilter(array, callback){
    let filteredArray = [];
    for(let i = 0; i < array.length; i++){
        filter = callback(array[i], i, array);
        if(filter){ filteredArray.push(filter); }
    }
    return filteredArray;
}

function mySome(array, callback){
    for(let i = 0; i < array.length; i++){
        filter = callback(array[i], i, array);
        if(filter) {return true; }
    }
    return false;
}

function myEvery(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

function myReduce(array, callback) {
    if(array.length == 0) { throw new Error ("Empty array."); }
    let accumulator = array[0];

    for(let i = 1; i < array.length; i++){
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

function myIncludes(arr, searchFor){
    for(let i = 0; i < array.length; i++){
        if(array[i] == searchFor){ return true; }
    }
    return false;
}

function myIndexOf(array, searchFor){
    for(let i = 0; i < array.length; i++){
        if(array[i] == searchFor){ return array[i]; }
    }
    return -1;
}

function myPush(array, elementToAdd){
    for(let i = 0; i < array.length; i++){
        
    }
}

function myUnShift{

}

function grabKeys{

}

function grabValues{

}

