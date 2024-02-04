import AbilityBlock from "./ability";
import CharacterInfo from "./characterInfo";

// TypeScript type representation of a character sheet.
export default interface Character {
  characterInfo: CharacterInfo;
  abilityBlocks: AbilityBlock[];
}
