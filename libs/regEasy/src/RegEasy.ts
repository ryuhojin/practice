/**
 * @name RegEasy
 * @description 정규식을 편하게 작성하기 위한 타입스크립트 기반의 라이브러리 (COMMONJS , ES6 MOUDLE) 대응
 * @pattern 두가지 영역으로 나누어져있음. (1 : 빌더부 , 2 : 사용부)
 * @author 류호진
 * @github github.com/ryuhojin
 * @date 2023.04.04
 */
export default class RegEasy {
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
    this.pattern += `^`;
    return this;
  }
  /**
   * @name end
   * @description 문자열의 끝을 나타내는 패턴인 $를 추가함.
   * @returns this
   */
  end(): this {
    this.pattern += `$`;
    return this;
  }
  /**
   * @name both
   * @description 파라미터에 옵션을 주거나 정규식을 넣어줘서 모두 통과시키는 패턴
   * @returns this
   */
  both(...args: string[]): this {
    this.pattern += `[${args.join("")}]`;
    return this;
  }
  /**
   * @name add
   * @description 파라미터에 특정 옵션을 주거나 특정 문자를 주는 패턴
   * @returns this
   */
  char(val: string): this {
    this.pattern += val;
    return this;
  }
  /**
   * @name str
   * @description 파라미터에 특정 옵션을 주거나 특정 문자를 주는 패턴
   * @returns this
   */
  add(val: string): this {
    this.pattern += `[${val}]`;
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
   * @name between
   * @description 해당문자가 min ~ max 나타날 수있도록하는 패턴
   * @returns this
   */
  between(min: number = 1, max: number = Infinity): this {
    this.pattern += `{${min},${max}}`;
    return this;
  }
  /**
   * @name more
   * @description 해당문자가 정확히 count회 이상날 수 있도록 하는 패턴
   * 1. oneOrMore : +를 대체
   * 2. zeroOrMore : * 를 대체
   * @returns this
   */
  more(count: number): this {
    if (count == 0) {
      this.pattern += `*`;
    } else if (count == 1) {
      this.pattern += `+`;
    } else {
      this.pattern += `{${count},}`;
    }

    return this;
  }
  /**
   * @name zeroOrOne
   * @description 해당 문자가 0회 아니면 1회 나타날 수 있도록하는 패턴
   * @returns this
   */
  zeroOrOne(): this {
    this.pattern += `?`;
    return this;
  }
  /**
   * @name build
   * @description 앞서 추가한 정규식들을 빌드하는 메소드
   * @returns this
   */
  build(): this {
    return this;
  }
  toRegex(): RegExp {
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
    if (str == null || replaceValue == null) {
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
    const regex = new RegExp(this.pattern);
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
