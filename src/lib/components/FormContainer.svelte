<script lang="ts">
  import getRaces from "$lib/utils/dndApi";
  import AbilityScorePicker from "./ability-score/AbilityScorePicker.svelte";
  import CharacterInfo from "./character-info/CharacterInfo.svelte";
  import { Stepper, Step } from "@skeletonlabs/skeleton";
</script>

<div class="w-full">
  <Stepper>
    <Step>
      <svelte:fragment slot="header">Character Info</svelte:fragment>
      {#await getRaces()}
      <CharacterInfo races={[]} />
      {:then races} 
      <CharacterInfo races={races} />
      {:catch someError}
      <CharacterInfo races={[]} />
      {/await}
    </Step>
    <Step>
      <svelte:fragment slot="header">Ability Scores</svelte:fragment>
      <AbilityScorePicker />
    </Step>
  </Stepper>
</div>
