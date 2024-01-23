<script lang="ts">
    import PointBuy from "$lib/components/ability-score/PointBuy.svelte"
    import FormStepper from "./FormStepper.svelte";
    import CharacterInfo from "./character-info/CharacterInfo.svelte";
</script>

<div class="w-6/12">
    <FormStepper/>
</div>
<div class="w-6/12">
    <CharacterInfo/>
    <PointBuy/>
</div>