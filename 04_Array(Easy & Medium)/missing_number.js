var missingNumber = function(nums) {
    let xor = nums.length;
    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
};

// Example
let nums = [3, 0, 1];
console.log("Missing Number:", missingNumber(nums));
