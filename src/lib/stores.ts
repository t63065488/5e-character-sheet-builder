import { Writable, writable } from "svelte/store";
import { Race } from "./types/race";

// Store for storing available race options
export const raceStore: Writable<Race[]> = writable([]);

// Store for storing available spells
export const spellStore: Writable<any[]> = writable([]);
