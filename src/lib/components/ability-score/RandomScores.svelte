<script lang="ts">
  import {
    AbilityScore,
    getDeafultAbilityScores,
  } from "$lib/types/abilityScore";
  import AbilityContainer from "./AbilityContainer.svelte";
  import { ArrowLeftSolid, ArrowRightSolid } from "flowbite-svelte-icons";

  let abilityScores: AbilityScore[] = getDeafultAbilityScores(8);

  let rolls: any[] = [];

  abilityScores.forEach(() => {
    rolls.push([0, 0, 0, 0]);
  });

  const rollScore = (): any => {
    let scores: number[] = [];
    for (let i = 0; i < 4; ++i) {
      scores.push(rollD6());
    }
    scores.sort();
    return {
      score: scores[1] + scores[2] + scores[3],
      rolls: scores,
    };
  };

  const rollD6 = (): number => {
    return Math.floor(Math.random() * 6 + 1); // Max 6, min 1
  };

  const swapScore = (currentIndex: number, newIndex: number) => {
    const scoreA = abilityScores[currentIndex];
    const scoreB = abilityScores[newIndex];

    abilityScores[currentIndex] = {
      ...scoreA,
      baseScore: scoreB.baseScore,
      totalScore: scoreB.baseScore + scoreA.bonusScore,
    };

    abilityScores[newIndex] = {
      ...scoreB,
      baseScore: scoreA.baseScore,
      totalScore: scoreA.baseScore + scoreB.bonusScore,
    };
  };
</script>

<div class="flex-col w-full">
  <div class="flex justify-between">
    {#each abilityScores as block, index}
      <div class="flex flex-col items-center">
        {#if index !== 0}
          <button
            type="button"
            class="btn-icon variant-filled"
            on:click={() => swapScore(index, index - 1)}
            ><ArrowLeftSolid /></button
          >
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
        {#if index !== abilityScores.length - 1}
          <button
            type="button"
            class="btn-icon variant-filled"
            on:click={() => swapScore(index, index + 1)}
            ><ArrowRightSolid /></button
          >
        {/if}
      </div>
    {/each}
  </div>
  <div class="flex justify-center"></div>
</div>
