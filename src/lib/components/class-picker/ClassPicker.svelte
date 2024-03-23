<script lang="ts">
  import { classStore, loadClass } from "$lib/stores/classStore";
</script>

<div>
  {#each $classStore.classEndpoints as endpoint}
    <p>{endpoint.name}</p>
  {/each}
</div>
