<script lang="ts">
    import { Race } from "$lib/types/race";

    export let races: Race[] = [];
</script>

<div class="flex w-full">
    <label class="label">
        <span>Character Name</span>
        <input class="input" type="text"/>
    </label>
    <label class="label">
        <span>Race</span>
        <select class="select">
            {#each races as race }
                <option>{race.getName()}</option>
            {/each}
        </select>
    </label>
</div>