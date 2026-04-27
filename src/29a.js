/**
* @param {number[]} nums
* @return {void}
*/
var ArrayWrapper = function(nums) {
   this.nums = nums;
};

/**
* @return {number}
*/
ArrayWrapper.prototype.valueOf = function() {
   return this.nums.reduce((acc, n) => acc += n, 0)
}

/**
* @return {string}
*/
ArrayWrapper.prototype.toString = function() {
   let res = '[';
   const len = this.nums.length;
   if (len > 0) {
       for (let i = 0; i < len; i++) {
           res += `${this.nums[i]}`;
           if (i !== len - 1) res += ","
       }
   }
   res += ']';
   return res;
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/