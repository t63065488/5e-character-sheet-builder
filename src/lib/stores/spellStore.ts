import { Spell } from "$lib/types/spell";
import {
  GetEndpointsReponse,
  getSpell,
  getSpellEndpoints,
} from "$lib/utils/dndApi";
import { Writable, writable } from "svelte/store";

// Store for storing available spells
export const spellStore: Writable<{
  spellEndpoints: GetEndpointsReponse[];
  loaded: boolean;
  spells: { [name: string]: Spell };
}> = writable({
  spellEndpoints: [],
  loaded: false,
  spells: {},
});

export const loadSpellEndpoints = async () => {
  await getSpellEndpoints().then((endpoints: GetEndpointsReponse[]) => {
    spellStore.update((store) => {
      store.spellEndpoints = endpoints;
      store.loaded = true;
      return store;
    });
  });
};

export const loadSpell = (name: string, endpointUrl: string) => {
  spellStore.update((spellStore) => {
    if (!(name in spellStore.spells)) {
      getSpell(endpointUrl)
        .then((spell) => {
          console.log(spell);
          spellStore.spells[name] = spell;
        })
        .catch((error) => {
          console.error("There was en error retrieving spell " + name);
          console.error(error);
        });
    }
    return spellStore;
  });
};
