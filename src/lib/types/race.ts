import AbilityType from "./abilityType";

export interface Race {
  name: string;
  size: string;
  speed: number;
  features: any[];
  abilityBonuses?: AbilityBonus[];
  heightRange?: string;
}

export interface AbilityBonus {
  abilityType: AbilityType;
  bonus: number;
}
