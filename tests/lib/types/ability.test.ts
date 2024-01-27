import { AbilityBlock } from "$lib/types/ability";
import AbilityType from "$lib/types/abilityType";

test("When setAbilityScore called, should update modifier value", () => {
  // Given
  let abilityBlock = new AbilityBlock(AbilityType.STR, 10);
  // Then
  expect(abilityBlock.getAbilityModifier()).toBe(0);
  abilityBlock.setAbilityScore(20);
  expect(abilityBlock.getAbilityModifier()).toBe(5);
});
