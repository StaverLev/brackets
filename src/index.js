module.exports = function check(str, bracketsConfig) {
  const bracketsPair = {};
  let stack = [];

  bracketsConfig.forEach(
    (brackets) => (bracketsPair[brackets[0]] = brackets[1])
  );
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    bracketsPair[stack[stack.length - 1]] == current
      ? stack.pop()
      : stack.push(current);
  }
  return stack.length === 0;
};
