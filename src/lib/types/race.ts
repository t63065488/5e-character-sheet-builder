import { AbilityBonus } from "./abilityBonus";

export interface Race {
  name: string;
  size: string;
  speed: number;
  features: any[];
  abilityBonuses?: AbilityBonus[];
  heightRange?: string;
}
