<script lang="ts">
  import { classStore, loadClass } from "$lib/stores/classStore";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
</script>

<div>
  <Accordion>
    {#each $classStore.classEndpoints as endpoint}
      <AccordionItem on:click={() => loadClass(endpoint.name, endpoint.url)}>
        <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
</div>
