<script lang="ts">
    import AbilityContainer from "$lib/components/ability-score/AbilityContainer.svelte";
    import { getDefaultAbilityBlocks } from "$lib/utils/modifiers";

    let abilityBlocks = getDefaultAbilityBlocks();

    function rollScore(): number {
        let scores: number[] = [];
        for (let i = 0; i < 4; ++i) {
            scores.push(rollD6());
        }
        let currentIndex = 0;
        scores.forEach((value, index) => {
            if (value < scores[currentIndex]) {
                currentIndex = index;
            }
        });
        scores.splice(currentIndex, 1);
        return scores.reduce((sum, current) => sum + current, 0);
    }

    function rollD6(): number {
        return Math.floor(Math.random() * 6 + 1); // Max 6, min 1
    }
</script>

<button
    on:click={() => {
        abilityBlocks.map((block) => block.setAbilityScore(rollScore()));
        abilityBlocks = abilityBlocks;
    }}
>
    Roll All
</button>

<ul>
    {#each abilityBlocks as block}
        <button
            on:click={() => {
                block.setAbilityScore(rollScore());
                block = block;
            }}
        >
            Roll!
        </button>
    {/each}
</ul>

<AbilityContainer {abilityBlocks} />
