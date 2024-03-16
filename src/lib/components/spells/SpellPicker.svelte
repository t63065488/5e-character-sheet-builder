<script lang="ts">
  import { spellStore } from "$lib/stores/spellStore";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

  const getSpellDefinition = (endpointUrl: string) => {
    console.log("Called!");
  };
</script>

<Accordion autocollapse>
  {#each $spellStore.spellEndpoints as endpoint}
    <AccordionItem>
      <svelte:fragment slot="summary"
        ><button on:click={() => getSpellDefinition(endpoint.url)}
          >{endpoint.name}</button
        ></svelte:fragment
      >
      <svelte:fragment slot="content"></svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
