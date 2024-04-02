import AbilityType from "$lib/enums/abilityType";

export interface CharacterClass {
  name: string;
  savingThrows: AbilityType[];
  hitDice: number;
  spellCasting?: any;
}
