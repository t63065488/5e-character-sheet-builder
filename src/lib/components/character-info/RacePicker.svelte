<script lang="ts">
  import { GetEndpointsReponse, getRace, getRaceEndpoints } from "$lib/utils/dndApi";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import RaceInfo from "./RaceInfo.svelte";
    import { onMount } from "svelte";

  let raceEndpoints: Promise<GetEndpointsReponse[]>;

  onMount(() => {
    raceEndpoints = getRaceEndpoints();
  })
</script>

{#await raceEndpoints}
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
