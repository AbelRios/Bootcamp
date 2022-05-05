console.log("Ejercicio 1");

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// Ejercicio

console.log("Ejercicio 2");

let rangeOne = {
  from: 1,
  to: 6,
};

rangeOne[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        let result = { done: false, value: this.current };
        this.current += 2;
        return result;
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of rangeOne) {
  console.log(num); // 1, then 3, 5
}

// EJERCICIO

console.log("Ejercicio 3");

let rangeDos = {
  from: 1,
  to: 6,
};
rangeDos[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current % 2 !== 0) {
        this.current++;
      }
      if (this.current <= this.last) {
        let result = { done: false, value: this.current };
        this.current += 2;
        return result;
      } else {
        return { done: true };
      }
    },
  };
};
for (num of rangeDos) {
  console.log(num);
}
