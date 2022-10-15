'use strict';

const handler = {
  apply: (target, that, [x]) => {
    console.dir({ target, that, x });
    return target.fns.reduce((acc, fn) => fn(acc), x);
  }
};

class Composition extends Function {
  constructor(...fns) {
    super();
    this.fns = fns;
    const proxy = new Proxy(this, handler);
    return proxy;
  }
  static from(...fns) {
    return new Composition(...fns);
  }
}

const f = Composition.from((x) => x * x, (x) => ++x, (x) => x * 2);

const value = f(5); // ((5 * 5) + 1) * 2 = 26 * 2 = 52
console.log(value);
