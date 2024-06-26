import { raceStore } from "$lib/stores/raceStore";
import AbilityType from "$lib/enums/abilityType";
import { AbilityBonus } from "$lib/types/abilityBonus";
import Source from "$lib/enums/source";
import { spellStore } from "$lib/stores/spellStore";
import { Race } from "$lib/types/race";
import { Spell } from "$lib/types/spell";
import { CharacterClass } from "$lib/types/characterClass";
import { json } from "stream/consumers";

const API_BASE = "https://www.dnd5eapi.co";

const RACE_ENDPOINT: string = "/api/races";
const SPELL_ENDPOINT: string = "/api/spells";
const CLASS_ENDPOINT: string = "/api/classes";

export interface GetEndpointsReponse {
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

export const getClassEndpoints = async (): Promise<GetEndpointsReponse[]> => {
  return getEndpoints(CLASS_ENDPOINT);
};

const getEndpoints = async (
  endpoint: string,
): Promise<GetEndpointsReponse[]> => {
  return fetch(API_BASE + endpoint)
    .then((response) => response.json())
    .then((json) => json.results)
    .then((endpoints: GetEndpointsReponse[]) => endpoints)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getRace = async (endpoint: string): Promise<Race> => {
  return fetch(API_BASE + endpoint)
    .then((response) => response.json())
    .then((raceData) => {
      return {
        name: raceData.name,
        size: raceData.size,
        speed: raceData.speed,
        features: raceData.traits,
        abilityBonuses: mapAbilityBonuses(raceData.ability_bonuses),
        heightRange: raceData.size_description,
      };
    })
    .catch((errorResponse) => {
      throw new Error(errorResponse);
    });
};

export const getSpell = async (endpointUrl: string): Promise<Spell> => {
  return fetch(API_BASE + endpointUrl)
    .then((response) => response.json())
    .then((jsonReponse): Spell => {
      return {
        name: jsonReponse.name,
        description: jsonReponse.desc,
        range: jsonReponse.range,
        components: jsonReponse.components,
        ritual: jsonReponse.ritual,
        duration: jsonReponse.duration,
        concentration: jsonReponse.concentration,
        level: jsonReponse.levl,
        school: jsonReponse.school,
        classes: jsonReponse.classes,
        higherLevelCasting: jsonReponse.higher_level,
        material: jsonReponse.material,
        attackType: jsonReponse.attackType,
        damage: jsonReponse.damage,
        subclasses: jsonReponse.subclasses,
      };
    })
    .catch((errorResponse) => {
      throw new Error(errorResponse);
    });
};

export const getClass = async (
  endpointUrl: String,
): Promise<CharacterClass> => {
  return fetch(API_BASE + endpointUrl)
    .then((response) => response.json())
    .then((jsonReponse) => {
      return {
        name: jsonReponse.name,
        hitDice: jsonReponse.hit_die,
        savingThrows: mapSavingThrows(jsonReponse.saving_throws),
        spellCasting: jsonReponse.spellcasting,
      };
    });
};

const mapSavingThrows = (
  savingThrows: GetEndpointsReponse[],
): AbilityType[] => {
  return savingThrows.map(
    (save) => AbilityType[save.name as keyof typeof AbilityType],
  );
};

export const getClassLevels = async (className: string): Promise<any> => {
  return fetch(
    API_BASE + CLASS_ENDPOINT + "/" + className.toLowerCase() + "/levels",
  )
    .then((response) => response.json())
    .then((jsonReponse) => {
      return jsonReponse;
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
