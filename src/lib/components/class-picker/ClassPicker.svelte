<script lang="ts">
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

  let selectedClass: GetEndpointsReponse;

  const updateCharacterBaseClass = (endpoint: GetEndpointsReponse) => {
    getClass(endpoint.url).then((returnedClass) => {
      setCharacterBaseClass(returnedClass);
    });
  };
</script>

<div>
  <div>
    {#await getClassEndpoints()}
      <ProgressRadial value={undefined} />
    {:then endpoints}
      <div>
        <select
          bind:value={selectedClass}
          class="select"
          on:change={() => updateCharacterBaseClass(selectedClass)}
        >
          {#each endpoints as endpoint}
            <option value={endpoint}>{endpoint.name}</option>
          {/each}
        </select>
      </div>

      <div>
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
      </div>
    {:catch error}
      <p>There was an error loading classes... {error}</p>
    {/await}
  </div>
</div>
