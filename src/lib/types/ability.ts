import { calculateModifier } from "$lib/utils/modifiers";

export enum AbilityType {
  STR = "Strength",
  DEX = "Dexterity",
  CON = "Constitution",
  INT = "Intelligence",
  WIS = "Wisdom",
  CHA = "Charisma",
}

export class AbilityBlock {
  private abilityModifier: number;

  constructor(
    private type: AbilityType,
    private abilityScore: number,
  ) {
    this.abilityModifier = calculateModifier(this.abilityScore);
  }

  public getAbilityType(): AbilityType {
    return this.type;
  }

  public getAbilityScore(): number {
    return this.abilityScore;
  }

  public getAbilityModifier() {
    return this.abilityModifier;
  }

  public setAbilityScore(value: number) {
    this.abilityScore = value;
    this.abilityModifier = calculateModifier(this.abilityScore);
  }
}
