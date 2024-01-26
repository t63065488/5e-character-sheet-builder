<script lang="ts">
    import PointBuy from "$lib/components/ability-score/PointBuy.svelte"
    import { Race } from "$lib/types/race";
    import AbilityScorePicker from "./ability-score/AbilityScorePicker.svelte";
    import CharacterInfo from "./character-info/CharacterInfo.svelte";
    import {Stepper, Step } from '@skeletonlabs/skeleton'
</script>

<div class="w-full">
    <Stepper>
        <Step>
            <svelte:fragment slot="header">Character Info</svelte:fragment>
            <CharacterInfo races={[new Race("Human", "6ft", 30)]}/>
        </Step>
        <Step>
            <svelte:fragment slot="header">Ability Scores</svelte:fragment>
            <AbilityScorePicker/>
        </Step>
    </Stepper>
</div>
