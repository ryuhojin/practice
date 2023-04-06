// __tests__/index.test.ts
import { RegEasy, RegOpts } from "../src/index";

test("Build Regex Phone Number", () => {
  expect(
    new RegEasy().both(RegOpts.eng, RegOpts.kor, RegOpts._).toRegex() + ""
  ).toBe("/[a-zA-Z가-힣_]/");
});
