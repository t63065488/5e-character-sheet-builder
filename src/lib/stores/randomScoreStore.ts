import { AbilityScore, getDeafultAbilityScores } from "$lib/types/abilityScore";
import { Writable, writable } from "svelte/store";

export const randomScoreStore: Writable<{
  scores: AbilityScore[];
  rolls: number[][];
}> = writable({
  rolls: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  scores: getDeafultAbilityScores(0),
});
