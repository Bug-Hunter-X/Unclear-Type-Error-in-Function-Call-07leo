function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const aNum = typeof a === 'number' ? a : parseInt(a, 10);
  const bNum = typeof b === 'number' ? b : parseInt(b, 10);

  if (isNaN(aNum) || isNaN(bNum)) {
    throw new Error('Invalid input: Arguments must be numbers or strings that can be parsed as numbers.');
  }
  return aNum + bNum;
}

let result1 = addSafe("1", 2); // Safe addition, handles string-number conversions
console.log(result1); //Output: 3

let result2 = addSafe("abc", 2); //Throws an error
console.log(result2); // This line will not be reached due to error