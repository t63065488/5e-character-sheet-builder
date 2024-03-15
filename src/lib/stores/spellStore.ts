import { Writable, writable } from "svelte/store";

// Store for storing available spells
export const spellStore: Writable<{ spellEndpoint: any[]; spells: any[] }> =
  writable([]);
