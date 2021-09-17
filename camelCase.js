const camelCase = function(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      result += input[i].toLowerCase();
    } else {
      if (input[i] === ' ') {
        result += input[i + 1].toUpperCase();
        i++;
      } else {
        result += input[i];
      }
    }
  }

  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("lighthouse labs will show you the path to the shore"));
