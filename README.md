# Tasks

---

## Type Coercion for primitives
---

* Open [following link](https://github.com/Arman0701/Type-coercion-for-primitives/blob/master/Tasks/2.ParseInt-parsefloat-and-examples.js) and play Guess Test Understand
* Note, all commits in this hwk should be done in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* Read about difference of isNaN() and Number.isNan()
---
## What will be the result and why?
```
console.log("" + 1 + 0);                 // "10" type string
console.log("" - 1 + 0);                 // -1 type number
console.log(true + false);               // 1 type number
console.log(6 / "3");                    // 2 type number
console.log("2" * "3");                  // 6 type number
console.log(4 + 5 + "px");               // "9px" type string
console.log("$" + 4 + 5);                // "$45" type string
console.log("4" - 2);                    // 2 type number
console.log("4px" - 2);                  // NaN type number
console.log(7 / 0);                      // Infinity type number
console.log(" -9 " + 5);                 // "-95" type string
console.log(" -9 " - 5);                 // -14 type number
console.log(null + 1);                   // 1 type number
console.log(undefined + 1);              // NaN type number
```
### Write logic that implements parseInt
### Write logic that implements parseFloat
---
### Materials
* [Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
---
# Literature
#### Available in russian
* [Type Conversions](https://javascript.info/type-conversions)