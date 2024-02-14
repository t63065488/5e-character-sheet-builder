import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
import AbilityType from "$lib/types/abilityType";
import { render } from "@testing-library/svelte";
import { expect, test } from "vitest";

test("should render", async () => {
  render(AbilityContainer, {
    abilityBlocks: [
      {
        abilityType: AbilityType.CHA,
        baseScore: 0,
        bonusScore: 0,
        totalScore: 0,
      },
    ],
  });
  const node = document.querySelector("#score-list");
  expect(node).not.toBeNull();
});
