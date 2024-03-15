import { Writable, writable } from "svelte/store";

// Store for storing available spells
export const spellStore: Writable<{ spellEndpoints: any[]; spells: any[] }> =
  writable({
    spellEndpoints: [],
    spells: [],
  });
