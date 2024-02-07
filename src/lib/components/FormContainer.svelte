<script lang="ts">
  import { getRaces, getSpells } from "$lib/utils/dndApi";
  import AbilityScorePicker from "./ability-score/AbilityScorePicker.svelte";
  import CharacterInfo from "./character-info/CharacterInfo.svelte";
  import { Stepper, Step } from "@skeletonlabs/skeleton";
  import { raceStore, spellStore } from "$lib/stores";
  import { Race } from "$lib/types/race";

  let races: Race[] = [];

  raceStore.subscribe((raceData) => (races = raceData));

  getRaces();
  getSpells();

  // spellStore.subscribe((data) => console.log(data))
</script>

<div class="w-full">
  <Stepper>
    <Step>
      <svelte:fragment slot="header">Character Info</svelte:fragment>
      <CharacterInfo {races} />
    </Step>
    <Step>
      <svelte:fragment slot="header">Ability Scores</svelte:fragment>
      <AbilityScorePicker />
    </Step>
  </Stepper>
</div>
