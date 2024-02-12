<script lang="ts">
  import { AbilityScore } from "$lib/types/abilityScore";

  export let abilityBlocks: AbilityScore[];
</script>

<ul id="score-list">
  {#each abilityBlocks as block}{/each}
</ul>
