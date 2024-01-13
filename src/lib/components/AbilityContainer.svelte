<script lang="ts">
    import AbilityScore from "$lib/components/AbilityScore.svelte"
    import {AbilityBlock, AbilityType} from "$lib/types/ability";

    let abilityBlocks: AbilityBlock[] = []

    Object.keys(AbilityType).forEach((key, index) => {
        abilityBlocks.push(new AbilityBlock(AbilityType[key as keyof typeof AbilityType], 10));
    })

    console.log(abilityBlocks)
</script>

<ul>
    {#each abilityBlocks as block}
        <AbilityScore ability={block}/>
    {/each}
</ul>