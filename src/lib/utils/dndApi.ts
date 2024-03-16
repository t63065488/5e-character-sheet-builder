import "axios";
import axios from "axios";
import { raceStore } from "$lib/stores";
import AbilityType from "$lib/enums/abilityType";
import { AbilityBonus } from "$lib/types/abilityBonus";
import Source from "$lib/enums/source";
import { spellStore } from "$lib/stores/spellStore";

const apiBase = "https://www.dnd5eapi.co";

export const getRaces = async () => {
  const raceEndpoints: [{ index: string; name: string; url: string }] = (
    await axios.get(apiBase + "/api/races")
  ).data.results;
  raceEndpoints.forEach((endpoint, index) => {
    axios.get(apiBase + endpoint.url).then(
      (race) => {
        let raceData = race.data;
        raceStore.update((currentStore) => {
          return {
            loaded: index === raceEndpoints.length - 1,
            races: [
              ...currentStore.races,
              {
                name: raceData.name,
                size: raceData.size,
                speed: raceData.speed,
                features: raceData.traits,
                abilityBonuses: mapAbilityBonuses(raceData.ability_bonuses),
                heightRange: raceData.size_description,
              },
            ],
          };
        });
      },
      () => {
        console.error("Error retrieving race data.");
      },
    );
  });
};

export const getSpellEndpoints = async () => {
  const spellEndpoints: [{ index: string; name: string; url: string }] = (
    await axios.get(apiBase + "/api/spells")
  ).data.results;
  spellStore.update((spellStore) => {
    console.log(spellEndpoints);
    return {
      spellEndpoints: spellEndpoints,
      spells: spellStore.spells,
    };
  });
};

const mapAbilityBonuses = (
  abilityBonuses: [
    {
      ability_score: { index: string; name: string; url: string };
      bonus: number;
    },
  ],
): AbilityBonus[] => {
  let bonuses: AbilityBonus[] = [];
  abilityBonuses.forEach((bonus) => {
    bonuses.push({
      abilityType:
        AbilityType[bonus.ability_score.name as keyof typeof AbilityType],
      bonusScore: bonus.bonus,
      source: Source.RACIAL,
    });
  });
  return bonuses;
};
