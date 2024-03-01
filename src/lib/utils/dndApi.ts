import "axios";
import axios from "axios";
import { raceStore, spellStore } from "$lib/stores";
import AbilityType from "$lib/enums/abilityType";
import { AbilityBonus } from "$lib/types/abilityBonus";
import Source from "$lib/enums/source";

const apiBase = "https://www.dnd5eapi.co";

export async function getRaces() {
  const raceEndpoints: [{ index: string; name: string; url: string }] = (
    await axios.get(apiBase + "/api/races")
  ).data.results;
  raceEndpoints.forEach((endpoint) => {
    axios.get(apiBase + endpoint.url).then(
      (race) => {
        let raceData = race.data;
        raceStore.update((data) => [
          ...data,
          {
            name: raceData.name,
            size: raceData.size,
            speed: raceData.speed,
            features: raceData.traits,
            abilityBonuses: mapAbilityBonuses(raceData.ability_bonuses),
            heightRange: raceData.size_description,
          },
        ]);
      },
      () => {
        console.error("Error retrieving race data.");
      },
    );
  });
}

export async function getSpells() {
  const spellEndpoints: [{ index: string; name: string; url: string }] = (
    await axios.get(apiBase + "/api/spells")
  ).data.results;
  spellEndpoints.forEach((endpoint) => {
    axios.get(apiBase + endpoint.url).then(
      (newSpell) => {
        spellStore.update((currentSpells) => [...currentSpells, newSpell.data]);
      },
      () => {
        console.error("Error retrieving spell data.");
      },
    );
  });
}

function mapAbilityBonuses(
  abilityBonuses: [
    {
      ability_score: { index: string; name: string; url: string };
      bonus: number;
    },
  ],
): AbilityBonus[] {
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
}
