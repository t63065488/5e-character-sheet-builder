<script lang="ts">
  import { getRaces, getSpells } from "$lib/utils/dndApi";
  import AbilityScorePicker from "./ability-score/AbilityScorePicker.svelte";
  import CharacterInfo from "./character-info/CharacterInfo.svelte";
  import { Stepper, Step } from "@skeletonlabs/skeleton";
  import { raceStore } from "$lib/stores";

  getRaces();
  getSpells();
</script>

<div class="w-full">
  <Stepper>
    <Step>
      <svelte:fragment slot="header">Character Info</svelte:fragment>
      <CharacterInfo races={$raceStore.races} />
    </Step>w
    <Step>
      <svelte:fragment slot="header">Ability Scores</svelte:fragment>
      <AbilityScorePicker />
    </Step>
  </Stepper>
</div>
