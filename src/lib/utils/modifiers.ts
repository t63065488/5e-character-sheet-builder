import { AbilityBlock, AbilityType } from "$lib/types/ability";

function calculateModifier(abilityScore: number): number {
  return Math.floor((abilityScore - 10) / 2);
}

function getDefaultAbilityBlocks(): AbilityBlock[] {
  return [
    new AbilityBlock(AbilityType.STR, 10),
    new AbilityBlock(AbilityType.DEX, 10),
    new AbilityBlock(AbilityType.CON, 10),
    new AbilityBlock(AbilityType.INT, 10),
    new AbilityBlock(AbilityType.WIS, 10),
    new AbilityBlock(AbilityType.CHA, 10),
  ];
}

export { calculateModifier, getDefaultAbilityBlocks };
