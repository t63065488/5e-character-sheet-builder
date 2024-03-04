import Source from "$lib/enums/source";
import AbilityType from "../enums/abilityType";

export interface AbilityBonus {
  source: Source;
  bonusScore: number;
  abilityType: AbilityType;
}
