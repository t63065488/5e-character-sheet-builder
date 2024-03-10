<script lang="ts">
  import { Race } from "$lib/types/race";
  import { characterStore, updateCharacterRace } from "$lib/characterStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import RaceInfo from "./RaceInfo.svelte";
  import { raceStore } from "$lib/stores";

  export let races: Race[] = [];
</script>

<div class="p-4">
  <label class="label">
    <span>Character Name</span>
    <input
      class="input"
      type="text"
      bind:value={$characterStore.characterInfo.name}
    />
  </label>
  <div class="p-4" />
  <hr />
  <div class="p-4" />

  <h2 class="step-header text-2xl font-bold">Selected Race</h2>
  {#if $characterStore.characterInfo.race === undefined}
    <h2>Select a race below...</h2>
  {:else}
    <h2>{$characterStore.characterInfo.race.name}</h2>
    <RaceInfo race={$characterStore.characterInfo.race} selectEnabled={false} />
  {/if}
  <div class="p-4" />
  <hr />
  <div class="p-4" />
  <h2 class="step-header text-2xl font-bold">Available Races</h2>
  {#if $raceStore.loaded}
    <Accordion>
      {#each races as race}
        <AccordionItem>
          <svelte:fragment slot="summary">{race.name}</svelte:fragment>
          <svelte:fragment slot="content"
            ><RaceInfo {race} selectEnabled={true} /></svelte:fragment
          >
        </AccordionItem>
      {/each}
    </Accordion>
  {:else}
    <ProgressRadial value={undefined} />
  {/if}
</div>
