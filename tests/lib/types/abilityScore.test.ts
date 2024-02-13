import { expect, test } from "vitest"
import { AbilityScore, getAbilityScore, getDeafultAbilityScores } from "$lib/types/abilityScore";
import AbilityType from "$lib/types/abilityType";

test('getAbilityScore', () => {
    // Given
    const expectedResult: AbilityScore =         {
        abilityType: AbilityType.CHA,
        baseScore: 16,
        bonusScore: 0,
        totalScore: 16,
    }
    // When
    const result = getAbilityScore(16, 0, AbilityType.CHA);
    // Then
    expect(result).not.toBeNull();
    expect(result).toEqual(expectedResult);
})