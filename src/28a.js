class EventEmitter {
   constructor() {
       this.observers = {};
   }
   /**
    * @param {string} eventName
    * @param {Function} callback
    * @return {Object}
    */
   subscribe(eventName, callback) {
       if (Object.hasOwn(this.observers, eventName) || eventName in this.observers) {
           this.observers[eventName].push(callback);
       } else {
           this.observers[eventName] = [callback];
       }
       return {
           unsubscribe: () => {
               const updated = this.observers[eventName].filter(cb => cb !== callback);
               this.observers[eventName] = updated;
               return undefined;
           }
       };
   }

   /**
    * @param {string} eventName
    * @param {Array} args
    * @return {Array}
    */
   emit(eventName, args = []) {
       const output = [];
       if (eventName in this.observers && this.observers[eventName].length) {

           for (const callback of this.observers[eventName])
               output.push(callback(...args));
       }
       return output;
   }
}

/**
* const emitter = new EventEmitter();
*
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
*
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/