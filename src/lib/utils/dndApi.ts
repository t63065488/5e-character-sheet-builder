import { Race } from "$lib/types/race";
import "axios";
import axios from "axios";
import { raceStore, spellStore } from "$lib/stores";

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
  console.log(spellEndpoints)
  spellEndpoints.forEach((endpoint) => {
    axios.get(apiBase + endpoint.url).then((newSpell) => {
      spellStore.update((currentSpells) => [
        ...currentSpells,
        newSpell.data
      ])
    })
  })
}

