import { Race } from "$lib/types/race";
import "axios";
import axios from "axios";

const apiBase = "https://www.dnd5eapi.co";

export default function getRaces(): Race[] {
  axios.get(apiBase + "/api/races").then(
    (response) => {
      response.data.results
        .map((result: { url: string }) => {
          return axios.get(apiBase + result.url);
        })
        .map((data: any) => console.log(data));
    },
    () => {
      console.error("Could not retrieve races from 5e API.");
    },
  );
  return [];
}
