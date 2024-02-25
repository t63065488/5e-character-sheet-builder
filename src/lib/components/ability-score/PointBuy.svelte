<script lang="ts">
  import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
  import {
    AbilityScore,
    getDeafultAbilityScores,
  } from "$lib/types/abilityScore";

  const totalPoints: number = 27;
  let availablePoints: number = 27;
  let abilityBlocks: AbilityScore[] = getDeafultAbilityScores(8);

  const getCost = (newStat: number) => {
    return newStat > 13 ? 2 : 1;
  };

  const buyPoint = (block: AbilityScore): AbilityScore => {
    if (
      block.baseScore != 15 &&
      availablePoints >= getCost(block.baseScore + 1)
    ) {
      availablePoints -= getCost(block.baseScore + 1);
      block.baseScore = block.baseScore + 1;
      block.totalScore = block.baseScore + block.bonusScore;
    }
    return block;
  };

  const sellPoint = (block: AbilityScore): AbilityScore => {
    if (block.baseScore > 8) {
      availablePoints += getCost(block.baseScore);
      block.baseScore = block.baseScore - 1;
      block.totalScore = block.baseScore + block.bonusScore;
    }
    return block;
  };
</script>

<div>
  <p>Remaining Points: {availablePoints}/{totalPoints}</p>
</div>
<div class="grid grid-flow-row grid-flow-col gap-4">
  {#each abilityBlocks as block}
    <div class="flex">
      <button
        type="button"
        class="btn btn-sm variant-filled"
        on:click={() => (block = sellPoint(block))}
      >
        -
      </button>
      <AbilityContainer abilityScore={block} />
      <button
        type="button"
        class="btn btn-sm variant-filled"
        on:click={() => (block = buyPoint(block))}
      >
        +
      </button>
    </div>
  {/each}
</div>
