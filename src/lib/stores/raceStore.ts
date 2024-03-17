import { Writable, writable } from "svelte/store";
import { Race } from "../types/race";
import {
  GetEndpointsReponse,
  getRace,
  getRaceEndpoints,
} from "$lib/utils/dndApi";

// Store for storing available race options
export const raceStore: Writable<{
  raceEndpoints: GetEndpointsReponse[];
  races: Race[];
  loaded: boolean;
}> = writable({ raceEndpoints: [], races: [], loaded: false });

export const loadRaceEndpoints = async () => {
  await getRaceEndpoints().then((endpoints: GetEndpointsReponse[]) => {
    raceStore.update((store) => {
      (store.raceEndpoints = endpoints), (store.loaded = true);
      return store;
    });
  });
};

export const loadRace = (name: string, endpoint: string) => {
  raceStore.update((store) => {
    if (store.races.filter((race) => race.name === name).length === 0) {
      getRace(endpoint)
        .then((race) => {
          store.races = [...store.races, race];
        })
        .catch((error) => {
          console.error("There was an error when loading race " + name);
          console.error(error);
        });
    }
    return store;
  });
};
