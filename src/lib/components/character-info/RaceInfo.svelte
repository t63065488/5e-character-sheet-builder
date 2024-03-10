<script lang="ts">
  import { characterStore, updateCharacterRace } from "$lib/characterStore";
  import { Race } from "$lib/types/race";

  export let race: Race;
  export let selectEnabled: boolean;
</script>

<div>
  {#each race.features as feature}
    <p>{feature.name}</p>
  {/each}
  {#each race.abilityBonuses || [] as bonus}
    <p>{bonus.abilityType}:{bonus.bonusScore}</p>
  {/each}
  {#if selectEnabled}
    <button
      type="button"
      class="btn btn-sm variant-filled"
      disabled={$characterStore.characterInfo.race === race}
      on:click={() => updateCharacterRace(race)}
      >{$characterStore.characterInfo.race === race
        ? "Selected"
        : "Select"}</button
    >
  {/if}
</div>
