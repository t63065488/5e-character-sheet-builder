<script lang="ts">
  import { characterStore } from "$lib/characterStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import RaceInfo from "./RaceInfo.svelte";
  import { loadRace, raceStore } from "$lib/stores/raceStore";
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
      {#each $raceStore.raceEndpoints as raceEndpoint}
        <AccordionItem
          on:click={() => loadRace(raceEndpoint.name, raceEndpoint.url)}
        >
          <svelte:fragment slot="summary">{raceEndpoint.name}</svelte:fragment>
          <svelte:fragment slot="content">
            {#if $raceStore.races.filter((race) => race.name === raceEndpoint.name)[0]}
              <RaceInfo
                race={$raceStore.races.filter(
                  (race) => race.name === raceEndpoint.name,
                )[0]}
                selectEnabled={true}
              />
            {:else}
              <ProgressRadial value={undefined} />
            {/if}
          </svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>
  {:else}
    <ProgressRadial value={undefined} />
  {/if}
</div>
