import { Writable, writable } from "svelte/store";
import Character from "./types/character";
import { getDefaultAbilityBlocks } from "./utils/modifiers";
import { Race } from "./types/race";

export const characterInfoStore: Writable<Character> = writable({
  characterInfo: {},
  abilityBlocks: getDefaultAbilityBlocks(),
});

export const raceStore: Writable<Race[]> = writable([]);


export const spellStore: Writable<any[]> = writable([]);