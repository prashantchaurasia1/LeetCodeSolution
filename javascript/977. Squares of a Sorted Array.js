/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    generatedSquaredItem(A);
    sortArray(A);
    return A;
};

function generatedSquaredItem(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }   
}

function sortArray(arr){
    arr.sort(function(a,b){
        return a - b
    });
}
