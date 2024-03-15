import { Writable, writable } from "svelte/store";
import { Race } from "./types/race";

// Store for storing available race options
export const raceStore: Writable<{ races: Race[]; loaded: boolean }> = writable(
  { races: [], loaded: false },
);
