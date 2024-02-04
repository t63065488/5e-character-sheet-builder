<script lang="ts">
  import { characterInfoStore } from "$lib/stores";
  import AbilityBlock from "$lib/types/ability";

  export let statBlocks: AbilityBlock[] = [];

  const updateStats = () => {
    characterInfoStore.update((charInfo) => {
      return {
        ...charInfo,
        abilityBlocks: statBlocks,
      };
    });
  };
</script>

<div>
  <button type="button" class="btn variant-filled" on:click={updateStats}
    >Apply Stats</button
  >
</div>
