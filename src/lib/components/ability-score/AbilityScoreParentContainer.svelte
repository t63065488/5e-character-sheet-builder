<script lang="ts">
    import AbilityScoreBonuses from "./AbilityScoreBonuses.svelte";
import AbilityScorePicker from "./AbilityScorePicker.svelte";
import { characterInfoStore } from "$lib/stores";
    import AbilityContainer from "./AbilityContainer.svelte";

</script>

<!-- 
    @component
    Parent container for ability scores. This component uses 3 child components- a picker (e.g. random, point buy), racial bonuses (either statically applied, or selected) and the stat blocks themselves.

    The picker determines the initial base stats. The racial bonuses are then applied and the final result is displayed in the blocks.
 -->

 <div>
    <AbilityScorePicker />
    <hr/>
    <AbilityScoreBonuses abilityBonuses={$characterInfoStore.characterInfo.race?.abilityBonuses ?? []} />
    <hr/>
    <AbilityContainer abilityBlocks={$characterInfoStore.abilityBlocks}/>
 </div>
