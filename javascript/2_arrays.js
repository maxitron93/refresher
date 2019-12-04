// array
let nums = [2,4,6,8,10]

// select an element
// arrays are zero-based
let firstEl = nums[0]
console.log(firstEl)

// some array methods
console.log(nums.length) // return number of elements
console.log(nums.pop()) // removes and returns last element
nums.push(100) // add new element to the end
console.log(nums)
nums.unshift(-100) // add new element to the start
console.log(nums) 
console.log(nums.indexOf(4)) // return position of element
nums.forEach((el, index, arr) => { // loop through array
    console.log(el)
})