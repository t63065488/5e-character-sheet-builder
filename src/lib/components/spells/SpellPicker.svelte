<script lang="ts">
  import { loadSpell, spellStore } from "$lib/stores/spellStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";

  const getSpellDefinition = (name: string, endpointUrl: string) => {
    loadSpell(name, endpointUrl);
  };
</script>

<Accordion autocollapse>
  {#each $spellStore.spellEndpoints as endpoint}
    <AccordionItem
      on:click={() => getSpellDefinition(endpoint.name, endpoint.url)}
    >
      <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
      <svelte:fragment slot="content">
        {#if $spellStore.spells[endpoint.name]}
          <p>Spell loaded</p>
        {:else}
          <ProgressRadial value={undefined} />
        {/if}
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
