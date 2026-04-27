/**
* @param {Function} fn
* @param {number} t
* @return {Function}
*/
var throttle = function (fn, t) {
   let timeoutId, newArgs = null, inProgress = false;

   return function (...args) {
       if (inProgress) {
           newArgs = args;

       } else {
           fn(...args);
           inProgress = true;
           newArgs = null;

           timeoutId = setTimeout(() => {
               if (newArgs) {
                   fn(...newArgs);
                   newArgs = null;
               }
               inProgress = false;
           }, t);
       }
   }
}
var throttle = function (fn, t) {
   let timeoutInProgress = null, argstoProcess = null;

   const timeoutFn = () => {
       if (argstoProcess == null) {
           timeoutInProgress = null; // enter waiting phase
       } else {
           fn(...argstoProcess);
           argstoProcess = null;
           timeoutInProgress = setTimeout(timeoutFn, t);
       }
   }

   return function (...args) {
       if (timeoutInProgress) {
           argstoProcess = args;
       } else {
           fn(...args);
           timeoutInProgress = setTimeout(timeoutFn, t);
       }
   }
}

/**
* const throttled = throttle(console.log, 100);
* throttled("log"); // logged immediately.
* throttled("log"); // logged at t=100ms.
*/