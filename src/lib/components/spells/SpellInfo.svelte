<script lang="ts">
  import {
    addCharacterSpell,
    characterStore,
    removeCharacterSpell,
  } from "$lib/characterStore";
  import { Spell } from "$lib/types/spell";

  export let spell: Spell;
  export let selectEnabled: boolean;
</script>

<div>
  <p>{spell.name}</p>
  <p>{spell.description}</p>
  {#if selectEnabled}
    <button
      type="button"
      class="btn btn-sm variant-filled"
      on:click={() =>
        $characterStore.spells.includes(spell)
          ? removeCharacterSpell(spell)
          : addCharacterSpell(spell)}
      >{$characterStore.spells.includes(spell) ? "Remove" : "Add"}</button
    >
  {/if}
</div>
