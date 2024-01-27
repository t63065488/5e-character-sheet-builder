import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
import { AbilityBlock } from "$lib/types/ability";
import AbilityType from "$lib/types/abilityType";
import { render } from "@testing-library/svelte";

test("should render", async () => {
  render(AbilityContainer, {
    abilityBlocks: [new AbilityBlock(AbilityType.CHA, 0)],
  });
  const node = document.querySelector("#score-list");
  expect(node).not.toBeNull();
});
