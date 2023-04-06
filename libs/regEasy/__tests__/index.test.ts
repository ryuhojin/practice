// __tests__/index.test.ts
import RegEasy from "../src/index";

test("Build Regex Phone Number", () => {
  expect(new RegEasy().start().char("123123").end().build().toRegex() + "").toBe("/^123123$/"
  );
});

test("Test Regex Phone Number", () => {
  const regex = new RegEasy()
    .start()
    .char("01")
    .oneOf(["1", "7", "6", "9", "0"])
    .char("-")
    .number()
    .between(3, 4)
    .char("-")
    .number()
    .between(4, 4)
    .build();
  expect(regex.test("010-341-1234")).toBe(true);
});

test("Test Regex Email Address", () => {
  const regex = new RegEasy()
    .both()
    .more(1)
    .char('@')
    .both()
    .more(1)
    .char('.')
    .text()
    .more(1)
    .build();

  expect(regex.test("kik3926@naver.com")).toBe(true);
});


test("Test Regex Email Address", () => {
  const reg = new RegEasy()
  .text().build();
  
  expect(reg.replace("","")).toBe("");
});
