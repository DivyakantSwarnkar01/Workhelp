const emitter = {
    events: {},
  
    on(event, handler) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(handler);
    },
  
    off(event, handler) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(fn => fn !== handler);
      }
    },
  
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(fn => fn(...args));
      }
    }
  };
  
  export default emitter;
  