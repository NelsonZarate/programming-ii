const twoSum = function(nums, target) {
    console.log(nums.length);
    let sum ;
    for(i = 0; i <= nums.length;){
        let currentNumber = nums[i];
        let nextNumber = nums[i+1];
        for(j = 1; i <= nums.length;){
            if(sum == target)
                return [currentNumber, nextNumber];
            nextNumber = nums[j];
            sum = currentNumber + nextNumber;
        }
        j++;
        i++;
    }
};
console.log(twoSum([1,2], 3));