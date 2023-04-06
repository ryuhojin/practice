// __tests__/index.test.ts
import { RegEasy, RegOpts } from "../src/index";

test("Build Regex Phone Number", () => {
  expect(
    new RegEasy()
      .start()
      .char("01")
      .oneOf(["0", "1", "6", "7", "9"])
      .char("-")
      .add(RegOpts.num)
      .between(3, 4)
      .char("-")
      .add(RegOpts.num)
      .between(4, 4)
      .end()
      .toRegex() + ""
  ).toBe("/^01[01679]-[0-9]{3,4}-[0-9]{4,4}$/");
});

test("Test Regex Phone Number_True Case", () => {
  const regex = new RegEasy()
    .start()
    .char("01")
    .oneOf(["0", "1", "6", "7", "9"])
    .char("-")
    .add(RegOpts.num)
    .between(3, 4)
    .char("-")
    .add(RegOpts.num)
    .between(4, 4)
    .end()
    .build();
  expect(regex.test("010-000-0000")).toBe(true);
});

test("Test Regex Phone Number_False Case", () => {
  const regex = new RegEasy()
    .start()
    .char("01")
    .oneOf(["0", "1", "6", "7", "9"])
    .char("-")
    .add(RegOpts.num)
    .between(3, 4)
    .char("-")
    .add(RegOpts.num)
    .between(4, 4)
    .end()
    .build();
  expect(regex.test("010-0000-0000")).toBe(true);
});

test("Build Regex Email", () => {
  const regex = new RegEasy()
    .start()
    .both(RegOpts.eng, RegOpts.num)
    .more(1)
    .char("@")
    .between(1, 1)
    .add(RegOpts.eng)
    .more(1)
    .char(".")
    .add(RegOpts.eng)
    .more(2)
    .end()
    .toRegex();
  expect(regex + "").toBe("/^[a-zA-Z0-9]+@{1,1}[a-zA-Z]+.[a-zA-Z]{2,}$/");
});

test("Test Regex Email_True", () => {
  const regex = new RegEasy()
    .start()
    .both(RegOpts.eng, RegOpts.num)
    .more(1)
    .char("@")
    .between(1, 1)
    .add(RegOpts.eng)
    .more(1)
    .char(".")
    .add(RegOpts.eng)
    .more(2)
    .end()
    .build();

  expect(regex.test("kik3926@aver.com")).toBe(true);
});

test("Test Regex Email_False", () => {
  const regex = new RegEasy()
    .start()
    .both(RegOpts.eng, RegOpts.num)
    .more(1)
    .char("@")
    .between(1, 1)
    .add(RegOpts.eng)
    .more(1)
    .char(".")
    .add(RegOpts.eng)
    .more(2)
    .end()
    .build();

  expect(regex.test("kik3@926@aver.com")).toBe(false);
});
