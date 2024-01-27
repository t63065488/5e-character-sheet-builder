<script lang="ts">
  import AbilityScore from "$lib/components/ability-score/AbilityScore.svelte";
  import { AbilityBlock } from "$lib/types/ability";

  export let abilityBlocks: AbilityBlock[];
</script>

<ul id="score-list">
  {#each abilityBlocks as block}
    <AbilityScore ability={block} />
  {/each}
</ul>
