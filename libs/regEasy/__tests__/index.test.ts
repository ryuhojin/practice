// __tests__/index.test.ts
import RegEasy from "../src/index";

test("Build Regex Phone Number", () => {
  expect(new RegEasy().start().char("123123").end().build()+"").toBe("/^123123$/");
});

