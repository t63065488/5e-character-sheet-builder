import { AbilityScore, getDeafultAbilityScores } from "$lib/types/abilityScore";
import { Writable, writable } from "svelte/store";

export const pointBuyStore: Writable<{scores: AbilityScore[], availablePoints: number, totalPoints: number}> = writable(
    {
        scores: getDeafultAbilityScores(8),
        totalPoints: 27,
        availablePoints: 27,
    }
);
