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
    }
    return block;
  };

  const sellPoint = (block: AbilityScore): AbilityScore => {
    if (block.baseScore > 8) {
      availablePoints += getCost(block.baseScore);
      block.baseScore = block.baseScore - 1;
    }
    return block;
  };
</script>

<div>
  <p>Remaining Points: {availablePoints}/{totalPoints}</p>
</div>
<div>
  {#each abilityBlocks as block}
    <div class="btn-group variant-filled">
      <button
        type="button"
        class="btn btn-sm variant-filled"
        on:click={() => (block = sellPoint(block))}
      >
        -
      </button>
      <AbilityContainer abilityBlocks={[block]} />
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
