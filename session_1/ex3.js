const twoSum = function(nums, target) {
    console.log(nums.length);
    let sum ;
    for (let i = 0; i <= nums.length;i++){
        let currentNumber = nums[i];
        let nextNumber = nums[i+1];
        for(let j = 1; j <= nums.length;j++){
            if(sum == target)
                return [i, j];
            nextNumber = nums[j];
            sum = currentNumber + nextNumber;
        }       
    }
};
console.log(twoSum([1,2,3,4,5,6], 8));


function twoSumMap(nums,target){
    const myMap = new Map();
    for(let i = 0; i <= nums.length; i++){
        let complement = target - nums[i];
        if(myMap.has(complement))
            return [nums[i],myMap.get(complement)];
        myMap.set(nums[i],i);

    }
    return [];
}
console.log(twoSumMap([1,2,3,4,5,6], 8))