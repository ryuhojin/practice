/**
 * @name RegEasy
 * @description 정규식을 편하게 작성하기 위한 타입스크립트 기반의 라이브러리 (COMMONJS , ES6 MOUDLE) 대응
 * @pattern 두가지 영역으로 나누어져있음. (1 : 빌더부 , 2 : 사용부)
 * @author 류호진
 * @github github.com/ryuhojin
 * @date 2023.04.04
 */
class RegEasy {
  private pattern: string;

  constructor() {
    this.pattern = "";
  }

  // **************************************************
  // 1. 빌더부 ( 정규식 패턴 작성을 용이하게 하기 위한 부분 )
  // **************************************************

  /**
   * @name start
   * @description 문자열의 시작을 나타내는 패턴인 ^를 추가함.
   * @returns this
   */
  start(): this {
    this.pattern += "^";
    return this;
  }
  /**
   * @name end
   * @description 문자열의 끝을 나타내는 패턴인 $를 추가함.
   * @returns this
   */
  end(): this {
    this.pattern += "$";
    return this;
  }
  /**
   * @name char
   * @description 특정문자를 패턴에 추가함.
   * @returns this
   */
  char(value: string): this {
    this.pattern += value;
    return this;
  }
  /**
   * @name oneOf
   * @description 배열 중 하나를 나타내는 패턴
   * @param string[]
   * @returns this
   */
  oneOf(values: string[]): this {
    this.pattern += `[${values.join("")}]`;
    return this;
  }
  /**
   * @name noneOf
   * @description 배열 중 하나를 나타내지 않는 패턴
   * @param string[]
   * @returns this
   */
  noneOf(values: string[]): this {
    this.pattern += `[^${values.join("")}]`;
    return this;
  }
  /**
   * @name word
   * @description 영어,한글을 포함하는 패턴
   * @returns this
   */
  word(): this {
    this.pattern += "\\w가-힣";
    return this;
  }
  /**
   * @name nonWord
   * @description 영어,한글을 포함하지 않는 패턴
   * @returns this
   */
  nonWord(): this {
    this.pattern += "[^\\w가-힣]";
    return this;
  }
  /**
   * @name number
   * @description 숫자를 포함하는 패턴
   * @returns this
   */
  number(): this {
    this.pattern += "\\d";
    return this;
  }
  /**
   * @name nonNumber
   * @description 숫자를 포함하지 않는 패턴
   * @returns this
   */
  nonNumber(): this {
    this.pattern += "\\D";
    return this;
  }
  /**
   * @name space
   * @description 공백을 포함하는 패턴
   * @returns this
   */
  space(): this {
    this.pattern += "\\s";
    return this;
  }
  /**
   * @name space
   * @description 공백을 포함하지 않는 패턴
   * @returns this
   */
  nonSpace(): this {
    this.pattern += "\\S";
    return this;
  }
  /**
   * @name exactly
   * @description 해당문자가 정확히 count회 나타날 수있도록하는 패턴
   * @returns this
   */
  exactly(count: number): this {
    this.pattern += `{${count}}`;
    return this;
  }
  /**
   * @name between
   * @description 해당문자가 min ~ max 나타날 수있도록하는 패턴
   * @returns this
   */
  between(min: number = 1, max: number = Infinity): this {
    this.pattern += `{${min},${max}}`;
    return this;
  }
  /**
   * @name atLeast
   * @description 해당문자가 정확히 count회 이상날 수 있도록 하는 패턴
   * @returns this
   */
  atLeast(count: number): this {
    this.pattern += `{${count},}`;
    return this;
  }
  /**
   * @name zeroOrMore
   * @description 해당 문자가 0회 이상 나타날 수 있도록 * 패턴
   * @returns this
   */
  zeroOrMore(): this {
    this.pattern += "*";
    return this;
  }
  /**
   * @name zeroOrOne
   * @description 해당 문자가 0회 아니면 1회 나타날 수 있도록하는 패턴
   * @returns this
   */
  zeroOrOne(): this {
    this.pattern += "?";
    return this;
  }
  /**
   * @name oneOrMore
   * @description 해당 문자가 1회 이상 나타날 수 있도록 + 패턴
   * @returns this
   */
  oneOrMore(): this {
    this.pattern += "+";
    return this;
  }
  /**
   * @name build
   * @description 앞서 추가한 정규식들을 빌드하는 메소드
   * @returns this
   */
  build(): RegExp {
    if (!this.pattern) {
      throw new Error("Please make the pattern first.");
    }
    return new RegExp(this.pattern);
  }

  // **************************************************
  // 2. 사용부 ( 작성된 정규식 패턴을 활용하여 치환, 검색 등을 하는 기능부 )
  // **************************************************

  /**
   * @name replace
   * @description 만들어진 정규식을 이용해서 교체하는 메소드
   * @returns this
   */
  replace(str: string, replaceValue: string): string {
    if (!this.pattern) {
      throw new Error("Please build the pattern first.");
    }
    if (!str || !replaceValue) {
      throw new Error("Please input the parameters.");
    }
    const regex = new RegExp(this.pattern, "g");
    return str.replace(regex, replaceValue);
  }
  /**
   * @name match
   * @description 만들어진 정규식을 이용해서 찾는 메소드
   * @returns this
   */
  match(str: string): string[] | null {
    if (!this.pattern) {
      throw new Error("Please build the pattern first.");
    }
    if (!str) {
      throw new Error("Please input the parameters.");
    }
    const regex = new RegExp(this.pattern, "g");
    return str.match(regex);
  }
  /**
   * @name test
   * @description 만들어진 정규식의 규격에 맞는지 체크하는 메소드
   * @returns this
   */
  test(str: string): boolean {
    if (!this.pattern) {
      throw new Error("Please build the pattern first.");
    }
    if (!str) {
      throw new Error("Please input the parameters.");
    }
    const _regex = new RegExp(this.pattern);
    return _regex.test(str);
  }
  /**
   * @name isValid
   * @description 만들어진 정규식이 정확한지 체크하는 메소드
   * @returns this
   */
  isValid(str: string): boolean {
    try {
      new RegExp(str);
      return true;
    } catch (e) {
      return false;
    }
  }
}
export default RegEasy;
