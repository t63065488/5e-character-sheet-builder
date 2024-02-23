import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
import AbilityType from "$lib/types/abilityType";
import { render } from "@testing-library/svelte";
import { expect, test } from "vitest";

test("should render", async () => {
  const node = render(AbilityContainer, {
    props: {
      abilityScore: {
        abilityType: AbilityType.CHA,
        baseScore: 10,
        bonusScore: 2,
        totalScore: 12
      }
    }
  })
  expect(node).not.toBeNull();
});
