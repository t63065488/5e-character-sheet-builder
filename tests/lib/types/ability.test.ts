import { AbilityBlock, AbilityType } from "$lib/types/ability";

test("When setAbilityScore called, should update modifier value", () => {
    // Given
    let abilityBlock = new AbilityBlock(AbilityType.STR, 10);
    // Then
    expect(abilityBlock.getAbilityModifier()).toBe(0);
    abilityBlock.setAbilityScore(20);
    expect(abilityBlock.getAbilityModifier()).toBe(5);
})