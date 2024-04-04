<script lang="ts">
  import { characterStore } from "$lib/characterStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import RaceInfo from "./RaceInfo.svelte";
  import { getRace, getRaceEndpoints } from "$lib/utils/dndApi";
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
  {#await getRaceEndpoints()}
    <ProgressRadial value={undefined} />
    <p>Loading Races...</p>
  {:then raceEndpoints}
    <Accordion>
      {#each raceEndpoints as raceEndpoint}
        <AccordionItem>
          <svelte:fragment slot="summary">{raceEndpoint.name}</svelte:fragment>
          <svelte:fragment slot="content">
            {#await getRace(raceEndpoint.url)}
              <ProgressRadial value={undefined} />
              <p>Loading {raceEndpoint.name}...</p>
            {:then retrievedRace}
              <RaceInfo race={retrievedRace} selectEnabled={true} />
            {:catch error}
              <p>
                There was an error loading details for {raceEndpoint.name} - {error}
              </p>
            {/await}
          </svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>
  {:catch}
    <p>There was an error loading available races...</p>
  {/await}
</div>
