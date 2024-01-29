import { Race } from "$lib/types/race";
import "axios";
import axios from "axios"; 
import {raceStore} from "$lib/stores"

const apiBase = "https://www.dnd5eapi.co";

export default async function getRaces() {
  const apiEndpoints: [{ index: string, name: string, url: string}] = (await (axios.get(apiBase + "/api/races"))).data.results;
  apiEndpoints.forEach(endpoint => {
    axios.get(apiBase + endpoint.url).then(race => {
      let raceData = race.data;
      raceStore.update((data) => [...data, new Race(raceData.name, raceData.size, raceData.speed, raceData.traits, raceData.size_description)]);
    }, () => {
      console.error("Error retrieving race data.")
    })
  })
}
