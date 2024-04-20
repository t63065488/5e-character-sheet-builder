<script lang="ts">
  import {
    Accordion,
    AccordionItem,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";
  import SpellInfo from "./SpellInfo.svelte";
  import {
    GetEndpointsReponse,
    getSpell,
    getSpellEndpoints,
  } from "$lib/utils/dndApi";
  import { onMount } from "svelte";

  let spellEndpoints: Promise<GetEndpointsReponse[]>;

  onMount(() => {
    spellEndpoints = getSpellEndpoints();
  });
</script>

{#await spellEndpoints}
  <ProgressRadial value={undefined} />
  <p>Loading spells...</p>
{:then spellEndpoints}
  <Accordion autocollapse>
    {#each spellEndpoints as endpoint}
      <AccordionItem>
        <svelte:fragment slot="summary">{endpoint.name}</svelte:fragment>
        <svelte:fragment slot="content">
          {#await getSpell(endpoint.url)}
            <ProgressRadial value={undefined} />
            <p>Loading {endpoint.name} definition...</p>
          {:then spell}
            <SpellInfo {spell} selectEnabled={true} />
          {:catch error}
            <p>
              There was an error loading definition for spell {endpoint.name}... {error}
            </p>
          {/await}
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
{:catch error}
  <p>There was an error loadding spells... {error}</p>
{/await}
