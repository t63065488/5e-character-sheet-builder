<script lang="ts">
  import { AbilityBonus } from "$lib/types/race";

  export let abilityBonuses: AbilityBonus[] = [];
</script>

<!-- 
    @component
    Enables application of bonuses to stats. If a stat bonus provides a designated stat, these will be displayed. Otherwise the stat can be selected.
    If there are no bonuses, this block will render nothing.
 -->

{#each abilityBonuses as bonus}
  <p>{bonus.abilityType} + {bonus.bonus}</p>
{/each}
