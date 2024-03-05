import { Writable, writable } from "svelte/store";
import Character from "./types/character";
import {
  AbilityScore,
  getAbilityScore,
  getDeafultAbilityScores,
} from "./types/abilityScore";
import { Race } from "./types/race";
import Source from "./enums/source";

export const characterStore: Writable<Character> = writable({
  characterInfo: {},
  abilityScores: getDeafultAbilityScores(),
  abilityBonuses: [],
  features: [],
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
  characterStore.update((store) => {
    let currentCharacter: Character = store;

    if (currentCharacter.characterInfo.race !== null) {
      currentCharacter.abilityBonuses
        .filter((bonus) => bonus.source === Source.RACIAL)
        .map((bonus) => {
          currentCharacter.abilityScores
            .filter((score) => score.abilityType === bonus.abilityType)
            .map(
              (score) =>
                (currentCharacter.abilityScores[
                  currentCharacter.abilityScores.indexOf(score)
                ] = getAbilityScore(
                  score.baseScore,
                  score.bonusScore - bonus.bonusScore,
                  score.abilityType,
                )),
            );
        });

      currentCharacter.abilityBonuses = currentCharacter.abilityBonuses.filter(
        (bonus) => bonus.source !== Source.RACIAL,
      );
    }

    newRace.abilityBonuses?.forEach((bonus) => {
      currentCharacter.abilityBonuses.push(bonus);
      currentCharacter.abilityScores
        .filter((score) => score.abilityType === bonus.abilityType)
        .map(
          (score) =>
            (currentCharacter.abilityScores[
              currentCharacter.abilityScores.indexOf(score)
            ] = getAbilityScore(
              score.baseScore,
              score.bonusScore + bonus.bonusScore,
              score.abilityType,
            )),
        );
    });

    return currentCharacter;
  });
};
