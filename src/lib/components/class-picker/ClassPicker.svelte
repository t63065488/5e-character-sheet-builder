<script lang="ts">
  import { classStore, loadClass } from "$lib/stores/classStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import ClassInfo from "./ClassInfo.svelte";
  import { setCharacterBaseClass } from "$lib/characterStore";
  import {
    GetEndpointsReponse,
    getClass,
    getClassEndpoints,
  } from "$lib/utils/dndApi";
  import { CharacterClass } from "$lib/types/characterClass";

  let selectedClass: GetEndpointsReponse;

  let endpointsPromise = getClassEndpoints();

  const updateCharacterBaseClass = (endpoint: GetEndpointsReponse) => {
    getClass(endpoint.url).then((returnedClass) => {
      setCharacterBaseClass(returnedClass);
    });
  };
</script>

<div>
  <div>
    {#await endpointsPromise}
      <ProgressRadial value={undefined} />
    {:then endpoints}
      <select
        bind:value={selectedClass}
        class="select"
        on:change={() => updateCharacterBaseClass(selectedClass)}
      >
        {#each endpoints as endpoint}
          <option value={endpoint}>{endpoint.name}</option>
        {/each}
      </select>
    {/await}
  </div>

  {#await endpointsPromise}
    <div class="flex justify-center">
      <ProgressRadial value={undefined} />
      <p>Loading classes...</p>
    </div>
  {:then endpoints}
    <Accordion>
      {#each endpoints as endpoint}
        <AccordionItem on:click={() => getClass(endpoint.url)}>
          <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
          <svelte:fragment slot="content">
            {#await getClass(endpoint.url)}
              <div class="flex justify-center">
                <ProgressRadial value={undefined} />
                <p>Loading class details...</p>
              </div>
            {:then characterClass}
              <ClassInfo {characterClass} />
            {/await}
          </svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>
  {:catch error}
    <p>There was an error when loading classes... {error}</p>
  {/await}
</div>
