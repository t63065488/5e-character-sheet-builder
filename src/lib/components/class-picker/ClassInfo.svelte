<script lang="ts">
  import { loadClassLevels } from "$lib/stores/classStore";
  import { CharacterClass } from "$lib/types/characterClass";
  import { onMount } from "svelte";

  export let characterClass: CharacterClass;

  onMount(async () => {
    loadClassLevels(characterClass.name);
  });
</script>

<div>
  <!-- <p>{characterClass}</p> -->
</div>
