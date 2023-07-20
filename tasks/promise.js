class MyPromise {
  constructor(executor) {
    this.queue = [];
    executor(this.resolve.bind(this));
  }

  then(cb) {
    this.queue.push(cb);
    return this;
  }

  resolve(argument) {
    if (this.queue.length > 0) {
      this.chain(argument);
    }
  }

  chain(nextVal) {
    let fn = this.queue.shift();
    let result = fn(nextVal);
    while(this.queue.length > 0) {
      fn = this.queue.shift();
      result = fn(result);
    }
  }
}

const cb = (resolve, reject) => {
  setTimeout(() => resolve(10), 500);
};

const myPromise = new MyPromise(cb);

myPromise.then((v) => {
  const res = v+1;
  console.log(res);
  return res;
}).then((v) => {
  const res = v+2;
  console.log(res);
  return res;
});
