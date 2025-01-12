function add(a: number, b: number): number {
  return a + b;
}

let result = add("1", 2); // Type Error, but the error message may not be clear enough
console.log(result);