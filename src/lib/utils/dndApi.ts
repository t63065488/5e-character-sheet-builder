import "axios";
import axios from "axios";
import { raceStore } from "$lib/stores";
import AbilityType from "$lib/enums/abilityType";
import { AbilityBonus } from "$lib/types/abilityBonus";
import Source from "$lib/enums/source";
import { spellStore } from "$lib/stores/spellStore";

const API_BASE = "https://www.dnd5eapi.co";

const RACE_ENDPOINT: string = "/api/races";
const SPELL_ENDPOINT: string = "/api/spells";

interface GetEndpointsReponse {
  name: string;
  url: string;
  index: string;
}

export const getRaceEndpoints = async (): Promise<GetEndpointsReponse[]> => {
  return getEndpoints(RACE_ENDPOINT);
};

export const getSpellEndpoints = async (): Promise<GetEndpointsReponse[]> => {
  return getEndpoints(SPELL_ENDPOINT);
};

const getEndpoints = async (endpoint: string) => {
  return await fetch(API_BASE + endpoint)
    .then((response) => response.json())
    .then((endpoints: GetEndpointsReponse[]) => endpoints)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getRaces = async () => {
  const raceEndpoints: [{ index: string; name: string; url: string }] = (
    await axios.get(API_BASE + "/api/races")
  ).data.results;
  raceEndpoints.forEach((endpoint, index) => {
    axios.get(API_BASE + endpoint.url).then(
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

export const getSpellDefinition = async (endpointUrl: string) => {
  fetch(API_BASE + endpointUrl)
    .then((response) => response.json())
    .then((jsonReponse) =>
      spellStore.update((store) => {
        return {
          spellEndpoints: store.spellEndpoints,
          spells: [...store.spells, jsonReponse],
        };
      }),
    );
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
