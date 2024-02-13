import { test, expect } from "vitest";
import { calculateModifier } from "$lib/utils/modifiers";

test("Should return 5", () => {
  expect(calculateModifier(20)).toBe(5);
});
