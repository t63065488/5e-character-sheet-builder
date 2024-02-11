<script lang="ts">
  import { characterInfoStore } from "$lib/stores";
  import { AbilityScore } from "$lib/types/abilityScore";
  import AbilityType from "$lib/types/abilityType";

  let statOptions = [
    AbilityType.STR,
    AbilityType.DEX,
    AbilityType.CON,
    AbilityType.INT,
    AbilityType.WIS,
    AbilityType.CHA,
  ];

  let abilityScores: AbilityScore[] = [];

  function rollScore(): number {
    let scores: number[] = [];
    for (let i = 0; i < 4; ++i) {
      scores.push(rollD6());
    }
    let currentIndex = 0;
    scores.forEach((value, index) => {
      if (value < scores[currentIndex]) {
        currentIndex = index;
      }
    });
    scores.splice(currentIndex, 1);
    return scores.reduce((sum, current) => sum + current, 0);
  }

  function rollD6(): number {
    return Math.floor(Math.random() * 6 + 1); // Max 6, min 1
  }

  const updateAbilityScore = (type: AbilityType, value: number) => {
    characterInfoStore.update((character) => {
      let abilityScores = character.abilityScores;
      abilityScores
        .filter((score) => score.abilityType === type)
        .forEach((score) => {
          score.baseScore = value;
        });
      return {
        ...character,
        abilityScores: abilityScores,
      };
    });

    characterInfoStore.subscribe((char) => console.log(char));
  };
</script>

<div class="flex-col w-full">
  <div class="flex justify-center">
    {#each abilityScores as block}
      <div class="flex flex-col items-center">
        <h2>{block.totalScore}</h2>
        <hr />
        <select
          class="select"
          on:change={() =>
            updateAbilityScore(block.abilityType, block.baseScore)}
        >
          <option value=""></option>
          {#each statOptions as statOption}
            <option value={statOption}>{statOption}</option>
          {/each}
        </select>
      </div>
    {/each}
  </div>
  <div class="flex justify-center">
    <button
      type="button"
      class="btn btn-md variant-filled"
      on:click={() => {
        abilityScores.map((block) => (block.baseScore = rollScore()));
        abilityScores = abilityScores;
      }}
    >
      Roll!
    </button>
  </div>
</div>
