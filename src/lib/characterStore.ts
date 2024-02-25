import { Writable, writable } from "svelte/store";
import Character from "./types/character";
import { AbilityScore, getDeafultAbilityScores } from "./types/abilityScore";

export const characterStore: Writable<Character> = writable({
  characterInfo: {},
  abilityScores: getDeafultAbilityScores(),
});

export const updateCharacterAbilityScores = (scores: AbilityScore[]) => {
  characterStore.update((store) => {
    return {
      ...store,
      abilityScores: scores,
    };
  });
};
