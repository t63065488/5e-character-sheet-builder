import { AbilityScore } from "$lib/types/abilityScore";
import { Writable, writable } from "svelte/store";

export const pointBuyStore: Writable<AbilityScore[]> = writable([]);
