<script lang="ts">
  import { updateCharacterAbilityScores } from "$lib/characterStore";
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

    updateCharacterAbilityScores(abilityScores);
  };

  const rollAllScores = () => {
    for (let i = 0; i < abilityScores.length; i++) {
      const result = rollScore();
      abilityScores[i].baseScore = result.score;
      abilityScores[i].totalScore =
        abilityScores[i].baseScore + abilityScores[i].bonusScore;
      rolls[i] = result.rolls;
    }

    updateCharacterAbilityScores(abilityScores);
  };
</script>

<div class="flex-col w-full">
  <button
    type="button"
    class="btn btn-sm variant-filled"
    on:click={() => rollAllScores()}>Roll!</button
  >
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
