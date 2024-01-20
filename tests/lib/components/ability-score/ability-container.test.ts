import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
import { AbilityBlock, AbilityType } from "$lib/types/ability";
import { render } from '@testing-library/svelte'

test('should render', async () => {
    render(AbilityContainer, { abilityBlocks: [] })
    const node = document.querySelector("#score-list");
    expect(node).not.toBeNull();
})