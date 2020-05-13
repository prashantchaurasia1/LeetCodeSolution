/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var expectedRepeatingTImes = A.length;
    var arrayCountObj = {};
    for(var i = 0; i < expectedRepeatingTImes; i++){
        if( !arrayCountObj['arr_'+A[i]]){
            arrayCountObj['arr_'+A[i]] = 0;
        }
        arrayCountObj['arr_'+A[i]] =  arrayCountObj['arr_'+A[i]] + 1;
        if(arrayCountObj['arr_'+A[i]] == expectedRepeatingTImes/2 ){
           return A[i];
        }
    }
};
