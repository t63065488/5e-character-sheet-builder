<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import PointBuy from "./PointBuy.svelte";
  import RandomScores from "./RandomScores.svelte";
  import {
    AbilityScore,
    getAbilityScore,
    getDeafultAbilityScores,
  } from "$lib/types/abilityScore";
  import {
    characterStore,
    updateCharacterAbilityScores,
  } from "$lib/characterStore";
  import { pointBuyStore } from "$lib/stores/pointBuyStore";
  import { randomScoreStore } from "$lib/stores/randomScoreStore";

  let currentTab: number = 0;

  // Point Buy variables
  let pointBuyScores: AbilityScore[] = getDeafultAbilityScores(8);

  // Random scores variables
  let randomScores: AbilityScore[] = getDeafultAbilityScores(8);

  const updateScoreBonus = (
    characterStoreScores: AbilityScore[],
    localScores: AbilityScore[],
  ): AbilityScore[] => {
    const newScores: AbilityScore[] = [];
    localScores.forEach((score) => {
      characterStoreScores
        .filter((cScore) => cScore.abilityType === score.abilityType)
        .map((cScore) => {
          newScores.push(
            getAbilityScore(
              score.baseScore,
              cScore.bonusScore,
              score.abilityType,
            ),
          );
        });
    });
    return newScores;
  };

  characterStore.subscribe((character) => {
    pointBuyStore.update((pbStore) => {
      return {
        scores: updateScoreBonus(character.abilityScores, pbStore.scores),
        totalPoints: pbStore.totalPoints,
        availablePoints: pbStore.availablePoints,
      }
    }
      
    );
    randomScoreStore.update((rStore) => {
      return {
        rolls: rStore.rolls,
        scores: updateScoreBonus(character.abilityScores, rStore.scores),
      };
    });
    pointBuyScores = updateScoreBonus(character.abilityScores, pointBuyScores);
    randomScores = updateScoreBonus(character.abilityScores, randomScores);
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
      on:click={() => handleChangeTab($pointBuyStore.scores)}
    >
      <span>Point Buy</span>
    </Tab>
    <Tab
      bind:group={currentTab}
      name="tab2"
      value={1}
      on:click={() => handleChangeTab($randomScoreStore.scores)}
    >
      <span>Random</span>
    </Tab>
    <!-- Tab Content Definitions -->
    <svelte:fragment slot="panel">
      {#if currentTab === 0}
        <PointBuy
          abilityScores={$pointBuyStore.scores}
          bind:totalPoints={$pointBuyStore.totalPoints}
          bind:availablePoints={$pointBuyStore.availablePoints}
        />
      {:else if currentTab === 1}
        <RandomScores bind:abilityScores={$randomScoreStore.scores} bind:rolls={$randomScoreStore.rolls} />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>
