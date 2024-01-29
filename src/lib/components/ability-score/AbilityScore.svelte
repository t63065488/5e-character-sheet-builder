<script lang="ts">
  import AbilityBlock from "$lib/types/ability";

  export let ability: AbilityBlock;
</script>

<div id="{ability.getAbilityType()}-score-block">
  <p id="{ability.getAbilityType()}-score-text-type">
    {ability.getAbilityType()}:
  </p>
  <p id="{ability.getAbilityType()}-score-text-score">
    {ability.getAbilityScore()}
  </p>
  <p id="{ability.getAbilityType()}-score-text-modifier">
    (Modifier: {ability.getAbilityModifier()})
  </p>
</div>
