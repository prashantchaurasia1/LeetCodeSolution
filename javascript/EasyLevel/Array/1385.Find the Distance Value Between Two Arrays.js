/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    var count = 0;
    for(var i =0; i < arr1.length; i++){
        var isValid = true;
        for(var j=0; j < arr2.length; j++){
            if( Math.abs(arr1[i]-arr2[j]) <= d){
               isValid = false;
            }
        }
        if(isValid){
            count++;
        }
    }
    return count;
};
