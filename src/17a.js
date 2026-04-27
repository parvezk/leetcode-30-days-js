var TimeLimitedCache = function () {
   this.map = new Map([]);
   this.obj = {}
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function (key, value, duration) {
   let found = false;

   if (this.map.has(key)) {
       let timeoutId = this.obj[key];
       this.map.delete(key);
       clearTimeout(timeoutId);
       delete this.obj[key];
       found = true;
   }

   this.map.set(key, value);

   let timeoutId = setTimeout(() => {
       this.map.delete(key);
       clearTimeout(timeoutId)
       delete this.obj[key];
   }, duration);

   this.obj[key] = timeoutId;
   return found;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function (key) {
   if (this.map.has(key))
       return this.map.get(key);
   else
       return -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function () {
   return this.map.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/