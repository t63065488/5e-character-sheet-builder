<script lang="ts">
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import ClassInfo from "./ClassInfo.svelte";
  import {
    decreaseCharacterLevel,
    increaseCharacterLevel,
    setCharacterBaseClass,
  } from "$lib/characterStore";
  import {
    GetEndpointsReponse,
    getClass,
    getClassEndpoints,
  } from "$lib/utils/dndApi";
  import { onMount } from "svelte";

  let selectedClass: GetEndpointsReponse;

  let classEndpointsPromise: Promise<GetEndpointsReponse[]>;

  const updateCharacterBaseClass = (endpoint: GetEndpointsReponse) => {
    getClass(endpoint.url).then((returnedClass) => {
      setCharacterBaseClass(returnedClass);
    });
  };

  const addCharacterLevel = (characterClass: any) => {
    increaseCharacterLevel(characterClass);
  };

  const removeCharacterLevel = (className: string) => {
    decreaseCharacterLevel(className);
  };

  onMount(() => {
    classEndpointsPromise = getClassEndpoints();
  });
</script>

<!-- 
@component

- Responsible for allowing a player to choose a base class and proceeding levels in either the same class or multiple classes.
 -->
<div>
  <div>
    {#await classEndpointsPromise}
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
            <AccordionItem>
              <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
              <svelte:fragment slot="content">
                {#await getClass(endpoint.url)}
                  <div class="flex justify-center">
                    <ProgressRadial value={undefined} />
                    <p>Loading class details...</p>
                  </div>
                {:then characterClass}
                  <ClassInfo {characterClass} />
                  <hr />
                  <div class="flex">
                    <button
                      type="button"
                      class="btn btn-sm variant-filled"
                      on:click={() => addCharacterLevel(characterClass)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm variant-filled"
                      on:click={removeCharacterLevel}
                    >
                      +
                    </button>
                  </div>
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
