import { AbilityScore } from "./abilityScore";
import CharacterInfo from "./characterInfo";

// TypeScript type representation of a character sheet.
export default interface Character {
  characterInfo: CharacterInfo;
  abilityScores: AbilityScore[];
  features: any[];
}
