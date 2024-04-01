import { AbilityBonus } from "./abilityBonus";
import { AbilityScore } from "./abilityScore";
import CharacterInfo from "./characterInfo";
import { Spell } from "./spell";

// TypeScript type representation of a character sheet.
export default interface Character {
  characterInfo: CharacterInfo;
  abilityScores: AbilityScore[];
  abilityBonuses: AbilityBonus[];
  baseClass: any;
  classes: any[];
  features: any[];
  spells: Spell[];
}
