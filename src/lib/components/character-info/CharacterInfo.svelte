<script lang="ts">
  import { Race } from "$lib/types/race";
  import { characterInfoStore } from "$lib/stores";

  export let races: Race[] = [];
</script>

<div class="flex w-full">
  <label class="label">
    <span>Character Name</span>
    <input class="input" type="text" bind:value={$characterInfoStore.characterInfo.name}/>
  </label>
  <label class="label">
    <span>Race</span>
    <select class="select" bind:value={$characterInfoStore.characterInfo.race}>
      {#each races as race}
        <option>{race.name}</option>
      {/each}
    </select>
  </label>
</div>
