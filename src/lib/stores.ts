import { Writable, writable } from "svelte/store";
import Character from "./types/character";
import { Race } from "./types/race";
import { getDeafultAbilityScores } from "./types/abilityScore";

export const characterInfoStore: Writable<Character> = writable({
  characterInfo: {},
  abilityScores: getDeafultAbilityScores(),
});

// Store for storing available race options
export const raceStore: Writable<Race[]> = writable([]);

// Store for storing available spells
export const spellStore: Writable<any[]> = writable([]);
