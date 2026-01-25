let nums = [1, 2, 3, 4];

function Search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle; // found index
        } 
        else if (target < nums[middle]) {
            right = middle - 1; // move left
        } 
        else {
            left = middle + 1; // move right
        }
    }

    return -1; // not found
}

console.log(Search(nums, 3)); // Output: 2
