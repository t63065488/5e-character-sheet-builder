<script lang="ts">
  import AbilityScorePicker from "./ability-score/AbilityScorePicker.svelte";
  import CharacterInfo from "./character-info/CharacterInfo.svelte";
  import { Stepper, Step } from "@skeletonlabs/skeleton";
  import SpellPicker from "./spells/SpellPicker.svelte";
  import ClassPicker from "./class-picker/ClassPicker.svelte";
</script>

<div class="w-full">
  <Stepper>
    <Step>
      <svelte:fragment slot="header">Character Info</svelte:fragment>
      <CharacterInfo />
    </Step>
    <Step>
      <svelte:fragment slot="header">Class</svelte:fragment>
      <ClassPicker />
    </Step>
    <Step>
      <svelte:fragment slot="header">Ability Scores</svelte:fragment>
      <AbilityScorePicker />
    </Step>
    <Step>
      <svelte:fragment slot="header">Spells</svelte:fragment>
      <SpellPicker />
    </Step>
  </Stepper>
</div>
