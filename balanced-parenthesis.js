function balanceParenthesis(input) {
  input.split("");

  const tracker = [];
  const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (const bracket of input) {
    if (["{", "[", "("].includes(bracket)) {
      tracker.push(bracket);
    } else if (bracket.at(-1) === pairs[tracker.at(-1)]) {
      tracker.pop();
    } else {
      return false;
    }
  }

  return tracker.length === 0 ? true : false;
}

let input = "{[()]}";
console.log(balanceParenthesis(input));
