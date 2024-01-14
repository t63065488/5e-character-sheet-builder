<script lang="ts">
    import { AbilityBlock } from "$lib/types/ability";

    export let ability: AbilityBlock;
</script>

<p>{ability.getAbilityType()}: {ability.getAbilityScore()} (Modifier: {ability.getAbilityModifier()})</p>



