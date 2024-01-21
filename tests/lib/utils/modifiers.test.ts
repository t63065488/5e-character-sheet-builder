import { AbilityBlock, AbilityType } from "$lib/types/ability";
import {
  calculateModifier,
  getDefaultAbilityBlocks,
} from "$lib/utils/modifiers";

test("Should return 5", () => {
  expect(calculateModifier(20)).toBe(5);
});

test("Get default abilty blocks should return block for each ability", () => {
  // Given
  // When
  const abilityBlocks: AbilityBlock[] = getDefaultAbilityBlocks();
  // Then
  expect(abilityBlocks.length).toBe(Object.keys(AbilityType).length);
  expect(abilityBlocks[0].getAbilityScore()).toBe(10);
});
