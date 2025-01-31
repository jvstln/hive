function getFactors(num) {
  const factors = [num];

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
}

function parseInput(input) {
  const [[lengthA, lengthB], a, b] = input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  return { lengthA, lengthB, a, b };
}

function getTotalX(a, b) {
  const minElementB = b.reduce((min, b) => (b < min ? b : min), Infinity);

  let initialSet = getFactors(minElementB);
  // The initial set is the set of all factors of the minimum element in b (which should be the shortest starting point logically)
  // The idea is to  reduce this initial set to the set that satisfies all constraint

  for (const elementB of b) {
    initialSet.forEach((integer, index) => {
      if (elementB % integer !== 0) delete initialSet[index];
    });
  }

  for (const elementA of a) {
    initialSet.forEach((integer, index) => {
      if (integer % elementA !== 0) delete initialSet[index];
    });
  }

  return initialSet.filter((element) => isFinite(element)).length; // Removes all deleted element and return the length
}

// -------------- Working Example --------------------
// Replace the below input with your own. Note: According to the constraints, no line/array should be empty
let input = `
2 3
2 4
16 32 96`;

const { a, b } = parseInput(input);
console.log(getTotalX(a, b));
