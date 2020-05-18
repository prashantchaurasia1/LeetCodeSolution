/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var smallArray = [], bigArray = [], interSectionArray = [];
    nums1.length > nums2.length ? (bigArray = nums1, smallArray = nums2) : (bigArray = nums2,smallArray = nums1);
    
    for(var i=0; i < smallArray.length; i++ ){
        if( bigArray.indexOf(smallArray[i]) > -1 && interSectionArray.indexOf(smallArray[i]) == -1 ){
           interSectionArray.push(smallArray[i]);
        }
    }
    return interSectionArray;
};
