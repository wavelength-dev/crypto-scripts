import { uintToFixed } from "./index";

test("uintToFixed", () => {
  const num = uintToFixed(2)("1234");
  expect(num).toBe(12.34);
});

test("uintToFixed trailing zeros", () => {
  const num = uintToFixed(2)("1200");
  expect(num).toBe(12.0);
});
