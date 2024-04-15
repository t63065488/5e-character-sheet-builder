<script lang="ts">
  import { CharacterClass } from "$lib/types/characterClass";
  import { getClassLevels } from "$lib/utils/dndApi";
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";

  export let characterClass: CharacterClass;

  let classLevels: Promise<any>;

  onMount(async () => {
    classLevels = getClassLevels(characterClass.name);
  });
</script>

<!-- 
  @component
  - Displays data after a provided class.
 -->
<div>
  {#await classLevels}
    <ProgressRadial value={undefined} />
  {:then levels}
    <p>{JSON.stringify(levels)}</p>
  {:catch}
    <p>Error</p>
  {/await}
</div>
