<script lang="ts">
  import { classStore, loadClass } from "$lib/stores/classStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import ClassInfo from "./ClassInfo.svelte";
  import { characterStore } from "$lib/characterStore";
</script>

<div>
  <!-- Current Class Levels -->
  <div class="justify-center">
    {#each $characterStore.classes as characterClass}
      <p>{characterClass}</p>
    {/each}
  </div>
  <!-- Class Info Section -->
  <Accordion>
    {#each $classStore.classEndpoints as endpoint}
      <AccordionItem on:click={() => loadClass(endpoint.name, endpoint.url)}>
        <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
        <svelte:fragment slot="content">
          {#if $classStore.classes[endpoint.name] !== undefined}
            <ClassInfo characterClass={$classStore.classes[endpoint.name]} />
          {:else}
            <ProgressRadial value={undefined} />
          {/if}
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
</div>
