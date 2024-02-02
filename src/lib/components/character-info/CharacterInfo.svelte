<script lang="ts">
  import { Race } from "$lib/types/race";
  import { characterInfoStore } from "$lib/stores";

  export let races: Race[] = [];

  let selectedRace: Race;
  let characterName: string = "";

  const onEnterName = () => {
    console.log("Character name update!")
    characterInfoStore.update((character) => {
      return {
        abilityBlocks: character.abilityBlocks, 
        characterInfo: {
          ...character.characterInfo,
          name: characterName
        }
      }
    })
  }

  const onSelectRace = () => {
    characterInfoStore.update((character) => {
      return {
        abilityBlocks: character.abilityBlocks, 
        characterInfo: {
          ...character.characterInfo,
          race: selectedRace
        }
      }
    })
  }
</script>

<div class="flex w-full">
  <label class="label">
    <span>Character Name</span>
    <input class="input" type="text" bind:value={characterName} on:input={onEnterName}/>
  </label>
  <label class="label">
    <span>Race</span>
    <select class="select" bind:value={selectedRace} on:change={onSelectRace}>
      {#each races as race}
        <option>{race.name}</option>
      {/each}
    </select>
  </label>
</div>
