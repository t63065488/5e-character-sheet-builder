<script lang="ts">
    import { AbilityBlock } from "$lib/types/ability";
    import { getDefaultAbilityBlocks } from "$lib/utils/modifiers";
    import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";

    const totalPoints: number = 27;
    let availablePoints: number = 27;
    let abilityBlocks: AbilityBlock[] = getDefaultAbilityBlocks(8);

    const getCost = (newStat: number) => {
        return newStat > 13 ? 2 : 1;
    }

    const buyPoint = (block: AbilityBlock): AbilityBlock => {
        if(block.getAbilityScore() != 15 && availablePoints >= getCost(block.getAbilityScore() + 1)) {
            availablePoints -= getCost(block.getAbilityScore() + 1);
            block.setAbilityScore(block.getAbilityScore() + 1);
        }
        return block;
    }

    const sellPoint = (block: AbilityBlock): AbilityBlock => {
        if(block.getAbilityScore() > 8) {
            availablePoints += getCost(block.getAbilityScore());
            block.setAbilityScore(block.getAbilityScore() - 1)
        }
        return block;
    }
</script>

<div>
    <p>Remaining Points: {availablePoints}/{totalPoints}</p>
</div>
<div>
    {#each abilityBlocks as block}
    <div  class="btn-group variant-filled">
        <button type="button" class="btn btn-sm variant-filled" on:click={() => block = sellPoint(block)}>
            -
        </button>
        <AbilityContainer abilityBlocks={[block]}/>
        <button type="button" class="btn btn-sm variant-filled" on:click={() => block = buyPoint(block)}>
            +
        </button>
    </div>
    {/each}
</div>
