<script lang="ts">
  import { loadSpell, spellStore } from "$lib/stores/spellStore";
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import SpellInfo from "./SpellInfo.svelte";

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
          <SpellInfo
            spell={$spellStore.spells[endpoint.name]}
            selectEnabled={true}
          />
        {:else}
          <ProgressRadial value={undefined} />
        {/if}
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
