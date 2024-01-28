import { Race } from "$lib/types/race";
import "axios";
import axios from "axios";

const apiBase = "https://www.dnd5eapi.co";

export default async function getRaces(): Promise<Race[]> {
  const races: Race[] = [];
  const apiEndpoints: [{ index: string, name: string, url: string}] = (await (axios.get(apiBase + "/api/races"))).data.results;
  apiEndpoints.forEach(endpoint => {
    axios.get(apiBase + endpoint.url).then(race => {
      let raceData = race.data;
      races.push(new Race(raceData.name, raceData.size, raceData.speed, raceData.traits, raceData.size_description))
    }, () => {
      console.error("Error retrieving race data.")
    })
  })
  return races;
}
