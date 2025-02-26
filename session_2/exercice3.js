function containsDuplicate(nums) {
    const global = new Set(); 

    for (let num of nums) {
        if (global.has(num)) {
            return true;
        }
        global.add(num); 
    }

    return false; 
}
