import {
  getClass,
  getClassEndpoints,
  GetEndpointsReponse,
} from "$lib/utils/dndApi";
import { writable, Writable } from "svelte/store";

export const classStore: Writable<{
  classEndpoints: GetEndpointsReponse[];
  loaded: boolean;
  classes: { [name: string]: any };
}> = writable({
  classEndpoints: [],
  loaded: false,
  classes: {},
});

export const loadClassEndpoints = async () => {
  await getClassEndpoints().then((endpoints: GetEndpointsReponse[]) => {
    classStore.update((store) => {
      store.classEndpoints = endpoints;
      store.loaded = true;
      return store;
    });
  });
};

export const loadClass = (name: string, endpointUrl: string) => {
  classStore.update((store) => {
    if (!(name in store.classes)) {
      getClass(endpointUrl)
        .then((returnedClass) => {
          store.classes[name] = returnedClass;
        })
        .catch((error) => {
          console.error("There was an error retrieving class " + name);
          console.error(error);
        });
    }
    return store;
  });
};
