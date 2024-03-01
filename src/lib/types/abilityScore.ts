import AbilityType from "../enums/abilityType";

export interface AbilityScore {
  baseScore: number;
  bonusScore: number;
  totalScore: number;
  abilityType: AbilityType;
}

export const getAbilityScore = (
  score: number,
  bonusScore: number,
  abilityType: AbilityType,
): AbilityScore => {
  return {
    abilityType: abilityType,
    baseScore: score,
    bonusScore: bonusScore,
    totalScore: score + bonusScore,
  };
};

export const getDeafultAbilityScores = (baseScore?: number): AbilityScore[] => {
  let scores: AbilityScore[] = [];
  for (const at in AbilityType) {
    scores.push(
      getAbilityScore(
        baseScore ?? 10,
        0,
        AbilityType[at as keyof typeof AbilityType],
      ),
    );
  }
  return scores;
};
