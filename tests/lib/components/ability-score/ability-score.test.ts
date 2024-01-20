import AbilityScore from "$lib/components/ability-score/AbilityScore.svelte";
import { AbilityBlock, AbilityType } from "$lib/types/ability";
import { getByTestId, render } from "@testing-library/svelte";

test('should render type, score and modifier', async () => {
    const abilityBlock: AbilityBlock = new AbilityBlock(AbilityType.STR, 10);
    const { getByText } = render(AbilityScore, {ability: abilityBlock})

    const abilityType = getByText(abilityBlock.getAbilityType() + ':');
    const abilityScore = getByText(abilityBlock.getAbilityScore());
    const abilityModifier = getByText("(Modifier: " + abilityBlock.getAbilityModifier() + ")");

    expect(abilityType).not.toBeNull();
    expect(abilityType.textContent).toBe("Strength:");
    expect(abilityScore).not.toBeNull();
    expect(abilityScore.textContent).toBe("10");
    expect(abilityModifier).not.toBeNull();
    expect(abilityModifier.textContent).toBe("(Modifier: 0)");
    
})