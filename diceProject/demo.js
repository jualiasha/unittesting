"use strict";

const temp = new Array(20).fill(2);
console.log(temp);

const mapped = temp.map((value) => value + 5);
console.log(mapped);

const mappedWithInc = temp.map((value, ind) => [value + ind]);
mappedWithInc.length = 19;
console.log(mappedWithInc);

const bounds = new Array(19).fill(2).map((value, ind) => [value + ind]);

console.log(bounds);

const ubounds = [];
for (let i = 2; i <= 20; i++) {
  ubounds.push([i]);
}

console.log(ubounds);
