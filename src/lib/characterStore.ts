import { Writable, writable } from "svelte/store";
import Character from "./types/character";
import { AbilityScore, getDeafultAbilityScores } from "./types/abilityScore";
import { Race } from "./types/race";

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

export const updateCharacterRace = (newRace: Race) => {
  // Remove old racial bonuses, apply new ones
  characterStore.update((store) => {
    let currentCharacter: Character = store;

    return {
      ...store
    }
  })
}
