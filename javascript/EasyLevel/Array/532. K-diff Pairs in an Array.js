/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var count=0;
    var obj={};
    for(var i =0; i < nums.length-1; i++){
        for(var j=i; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k && i != j){
                if(!obj['sum_'+ (nums[i] + nums[j])]){
                   count++;
                }
                obj['sum_'+ (nums[i] + nums[j])] = true;
            }
        }
    }
    return count;
};
