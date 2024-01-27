import AbilityBlock from "./ability";
import CharacterInfo from "./characterInfo";

// TypeScript type representation of a character sheet.
export default class Character {
  public constructor(
    private characterInfo: CharacterInfo,
    private abilityScores: AbilityBlock[],
  ) {}
}
