import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
import { AbilityBlock, AbilityType } from "$lib/types/ability";
import { render, screen } from '@testing-library/svelte'

test('should render', async () => {
    render(AbilityContainer, { abilityBlocks: [new AbilityBlock(AbilityType.STR, 10)] })
    const node = document.querySelector("#score-list");
    expect(node).not.toBeNull();
})