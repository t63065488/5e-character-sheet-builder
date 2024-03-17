import { getSpell } from "$lib/utils/dndApi";
import { Writable, writable } from "svelte/store";

// Store for storing available spells
export const spellStore: Writable<{ spellEndpoints: any[]; spells: any[] }> =
  writable({
    spellEndpoints: [],
    spells: [],
  });

export const loadSpell = (name: string, endpointUrl: string) => {
  spellStore.update((spellStore) => {
    getSpell(endpointUrl)
      .then((spell) => {
        if (
          spellStore.spells.filter((spell) => spell.name === name).length === 0
        ) {
          spellStore.spells.push(spell);
        }
      })
      .catch((error) => {
        console.error("There was en error retrieving spell " + name);
        console.error(error);
      });
    return spellStore;
  });
};
