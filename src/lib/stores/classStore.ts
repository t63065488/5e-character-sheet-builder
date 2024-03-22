import { getClassEndpoints, GetEndpointsReponse } from "$lib/utils/dndApi";
import { writable, Writable } from "svelte/store";

export const classStore: Writable<{
  classEndpoints: GetEndpointsReponse[];
  loaded: boolean;
}> = writable({
  classEndpoints: [],
  loaded: false,
});

export const loadClassEndpoints = async () => {
    await getClassEndpoints().then((endpoints: GetEndpointsReponse[]) => {
        classStore.update((store) => {
            store.classEndpoints = endpoints;
            store.loaded = true;
            return store;
        })
    })
}