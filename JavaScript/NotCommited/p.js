'use strict';

class Composition extends Function {

  constructor(fns) {
    super('return this.execute()');
    this.events = {};
    this.fns = fns;
    return this.bind(this);
  }

  execute() {
    return this.fns;
  }

  on(name, callback) {
    const event = this.events[name];
    if (event) {
      event.push(callback);
    } else {
      this.events[name] = [callback];
    }
  }

}

const compose = (fns) => {
  /*const comp = (data, callback) => {
    return comp;
  };*/
  const comp = new Composition(fns);
  //Object.setPrototypeOf(comp, Composition.constructor.prototype);
  return comp;
};

const f = compose([(x) => x * 2, (x) => x + 1]);

console.dir({ f, r: f() });
