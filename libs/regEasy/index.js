function RegEasy() {
    let pattern = '';
  
    function startOfLine() {
      pattern += '^';
      return this;
    }
  
    function endOfLine() {
      pattern += '$';
      return this;
    }
  
    function anyCharacter() {
      pattern += '.';
      return this;
    }
  
    function letters(min = 1, max = Infinity) {
      pattern += `[a-zA-Z]{${min},${max}}`;
      return this;
    }
  
    function digits(min = 1, max = Infinity) {
      pattern += `\\d{${min},${max}}`;
      return this;
    }
  
    function whitespace(min = 1, max = Infinity) {
      pattern += `\\s{${min},${max}}`;
      return this;
    }
  
    function literal(char) {
      pattern += `\\${char}`;
      return this;
    }
  
    function oneOrMore() {
      pattern += '+';
      return this;
    }
  
    function zeroOrMore() {
      pattern += '*';
      return this;
    }
  
    function either(...args) {
      pattern += `(${args.join('|')})`;
      return this;
    }
  
    function toRegExp() {
      return new RegExp(pattern);
    }
  
    return {
      startOfLine,
      endOfLine,
      anyCharacter,
      letters,
      digits,
      whitespace,
      literal,
      oneOrMore,
      zeroOrMore,
      either,
      toRegExp,
    };
  }
  