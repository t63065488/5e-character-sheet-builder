import { AbilityScore } from "$lib/types/abilityScore";
import { Writable, writable } from "svelte/store";

export const randomScoreStore: Writable<{ scores: AbilityScore[]; rolls: [] }> =
  writable({
    rolls: [],
    scores: [],
  });
