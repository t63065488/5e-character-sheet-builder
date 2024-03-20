<script lang="ts">
  import { Spell } from "$lib/types/spell";

  export let spell: Spell;
</script>

<div>
  <p>{spell.name}</p>
  <p>{spell.description}</p>
</div>
