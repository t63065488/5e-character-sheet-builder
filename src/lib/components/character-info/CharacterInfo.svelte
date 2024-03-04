<script lang="ts">
  import { Race } from "$lib/types/race";
  import { characterStore, updateCharacterRace } from "$lib/characterStore";

  export let races: Race[] = [];

  let selectedRace: Race;
</script>

<div class="flex w-full">
  <label class="label">
    <span>Character Name</span>
    <input
      class="input"
      type="text"
      bind:value={$characterStore.characterInfo.name}
    />
  </label>
  <label class="label">
    <span>Race</span>
    <select
      class="select"
      bind:value={selectedRace}
      on:change={() => updateCharacterRace(selectedRace)}
    >
      {#each races as race}
        <option value={race}>{race.name}</option>
      {/each}
    </select>
  </label>
</div>
