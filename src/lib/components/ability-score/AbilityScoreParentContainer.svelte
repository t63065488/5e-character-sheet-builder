<script lang="ts">
  import AbilityScoreBonuses from "./AbilityScoreBonuses.svelte";
  import AbilityScorePicker from "./AbilityScorePicker.svelte";
  import { characterInfoStore } from "$lib/stores";
  import AbilityContainer from "./AbilityContainer.svelte";
</script>

<!-- 
    @component
    Parent container for ability scores. This component uses 2 child components.

    1. Racials are displayed/selected, which feed into the picker.
    2. The picker allows the user to choose their stats, including any racial bonuses applied.
 -->

<div>
  <AbilityScorePicker />
  <hr />
  <AbilityScoreBonuses
    abilityBonuses={$characterInfoStore.characterInfo.race?.abilityBonuses ??
      []}
  />
  <hr />
</div>
