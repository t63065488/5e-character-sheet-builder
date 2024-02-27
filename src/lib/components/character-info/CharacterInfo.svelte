<script lang="ts">
  import { Race } from "$lib/types/race";
  import { characterInfoStore } from "$lib/stores";

  export let races: Race[] = [];

  const handleSelectRace = () => {
    characterInfoStore.update((character) => {
      character.characterInfo.race?.abilityBonuses?.forEach((element) => {
        character.abilityScores
          .filter((score) => score.abilityType === element.abilityType)
          .map((score) => {
            score.bonusScore = element.bonus;
            score.totalScore = score.baseScore + score.bonusScore;
            return score;
          });
      });
      console.log(character);
      return {
        ...character,
      };
    });
  };
</script>

<div class="flex w-full">
  <label class="label">
    <span>Character Name</span>
    <input
      class="input"
      type="text"
      bind:value={$characterInfoStore.characterInfo.name}
    />
  </label>
  <label class="label">
    <span>Race</span>
    <select
      class="select"
      bind:value={$characterInfoStore.characterInfo.race}
      on:change={handleSelectRace}
    >
      {#each races as race}
        <option value={race}>{race.name}</option>
      {/each}
    </select>
  </label>
</div>
