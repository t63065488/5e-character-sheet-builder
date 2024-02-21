<script lang="ts">
  import { characterInfoStore } from "$lib/stores";
  import {
    AbilityScore,
    getDeafultAbilityScores,
  } from "$lib/types/abilityScore";
  import AbilityType from "$lib/types/abilityType";
  import AbilityContainer from "./AbilityContainer.svelte";
  import {ArrowLeftSolid, ArrowRightSolid} from 'flowbite-svelte-icons';

  let statOptions = [
    AbilityType.STR,
    AbilityType.DEX,
    AbilityType.CON,
    AbilityType.INT,
    AbilityType.WIS,
    AbilityType.CHA,
  ];

  let abilityScores: AbilityScore[] = getDeafultAbilityScores(8);

  let rolls: any[] = [];

  abilityScores.forEach(() => {
    rolls.push([0, 0, 0, 0]);
  });

  function rollScore(): any {
    let scores: number[] = [];
    for (let i = 0; i < 4; ++i) {
      scores.push(rollD6());
    }
    scores.sort();
    return {
      score: scores[1] + scores[2] + scores[3],
      rolls: scores,
    };
  }

  function rollD6(): number {
    return Math.floor(Math.random() * 6 + 1); // Max 6, min 1
  }
</script>

<div class="flex-col w-full">
  <div class="flex justify-between">
    {#each abilityScores as block, index}
      <div class="flex flex-col items-center">
        {#if index !== 0}
        <button><ArrowLeftSolid/></button>
        {/if}
        <AbilityContainer abilityScore={block} />
        <hr />
        <div class="flex">
          {#each rolls[index] as roll}
            <p>{roll}</p>
          {/each}
        </div>
        <button
          type="button"
          class="btn btn-md variant-filled"
          on:click={() => {
            const result = rollScore();
            block.baseScore = result.score;
            rolls[index] = result.rolls;
            block.totalScore = block.baseScore + block.bonusScore;
          }}
        >
          Roll!
        </button>
        {#if index !== abilityScores.length}
        <button><ArrowRightSolid/></button>
        {/if}
      </div>
    {/each}
  </div>
  <div class="flex justify-center"></div>
</div>
