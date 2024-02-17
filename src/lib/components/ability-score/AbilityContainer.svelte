<script lang="ts">
  import { AbilityScore } from "$lib/types/abilityScore";
    import { calculateModifier } from "$lib/utils/modifiers";

  export let abilityScore: AbilityScore;
</script>

<style>

</style>

<!-- @component
  Rounded card to display an AbilityScore and modifiers.
  Usage:
  <AbilityContainer abilityScore={block}/>
 -->
 <div class="card text-center h-20">
    <h3 class="h3">{abilityScore.abilityType}</h3>
    <h3 class="h3">{abilityScore.totalScore}</h3>
    <div class="rounded">
      <h4 class="h4">{calculateModifier(abilityScore.totalScore)}</h4>
    </div>
 </div>