<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import PointBuy from "./PointBuy.svelte";
  import RandomScores from "./RandomScores.svelte";
  import {
    AbilityScore,
    getDeafultAbilityScores,
  } from "$lib/types/abilityScore";
  import {
    characterStore,
    updateCharacterAbilityScores,
  } from "$lib/characterStore";

  let currentTab: number = 0;

  // Point Buy variables
  let pointBuyScores: AbilityScore[] = getDeafultAbilityScores(8);
  let pointBuyTotalPoints: number = 27;
  let pointBuyAvailablePoints: number = pointBuyTotalPoints;

  // Random scores variables
  let randomScores: AbilityScore[] = getDeafultAbilityScores(8);

  characterStore.subscribe((character) => {
    // When character is updated, refresh the ability bonuses on the scores for individual pickers
  });

  const handleChangeTab = (abilityScores: AbilityScore[]) => {
    updateCharacterAbilityScores(abilityScores);
  };
</script>

<div>
  <TabGroup justify="justify-center">
    <!-- Tab Definitions -->
    <Tab
      bind:group={currentTab}
      name="tab1"
      value={0}
      on:click={() => handleChangeTab(pointBuyScores)}
    >
      <span>Point Buy</span>
    </Tab>
    <Tab
      bind:group={currentTab}
      name="tab2"
      value={1}
      on:click={() => handleChangeTab(randomScores)}
    >
      <span>Random</span>
    </Tab>
    <!-- Tab Content Definitions -->
    <svelte:fragment slot="panel">
      {#if currentTab === 0}
        <PointBuy
          bind:abilityScores={pointBuyScores}
          bind:totalPoints={pointBuyTotalPoints}
          bind:availablePoints={pointBuyAvailablePoints}
        />
      {:else if currentTab === 1}
        <RandomScores bind:abilityScores={randomScores} />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
