import AbilityBlock from "$lib/types/ability";
import AbilityType from "$lib/types/abilityType";

function calculateModifier(abilityScore: number): number {
  return Math.floor((abilityScore - 10) / 2);
}

function getDefaultAbilityBlocks(startingValue: number = 10): AbilityBlock[] {
  return [
    new AbilityBlock(AbilityType.STR, startingValue),
    new AbilityBlock(AbilityType.DEX, startingValue),
    new AbilityBlock(AbilityType.CON, startingValue),
    new AbilityBlock(AbilityType.INT, startingValue),
    new AbilityBlock(AbilityType.WIS, startingValue),
    new AbilityBlock(AbilityType.CHA, startingValue),
  ];
}

export { calculateModifier, getDefaultAbilityBlocks };
