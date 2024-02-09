<script lang="ts">
  import AbilityType from "$lib/types/abilityType";
  import { getDefaultAbilityBlocks } from "$lib/utils/modifiers";

  let statOptions = [
    AbilityType.STR,
    AbilityType.DEX,
    AbilityType.CON,
    AbilityType.INT,
    AbilityType.WIS,
    AbilityType.CHA,
  ];

  let abilityBlocks = getDefaultAbilityBlocks();

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

  function updateAbilityScore() {}
</script>

<div class="flex-col w-full">
  <div class="flex justify-center">
    {#each abilityBlocks as block}
      <div class="flex flex-col items-center">
        <h2>{block.getAbilityScore()}</h2>
        <hr />
        <select class="select" on:change={updateAbilityScore}>
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
        abilityBlocks.map((block) => block.setAbilityScore(rollScore()));
        abilityBlocks = abilityBlocks;
      }}
    >
      Roll!
    </button>
  </div>
</div>
