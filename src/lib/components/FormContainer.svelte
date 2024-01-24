<script lang="ts">
    import PointBuy from "$lib/components/ability-score/PointBuy.svelte"
    import { Race } from "$lib/types/race";
    import FormStepper from "./FormStepper.svelte";
    import CharacterInfo from "./character-info/CharacterInfo.svelte";
</script>

<div class="w-6/12">
    <FormStepper/>
</div>
<div class="w-6/12">
    <CharacterInfo races={[new Race("Human", "6ft", 30)]}/>
    <PointBuy/>
</div>