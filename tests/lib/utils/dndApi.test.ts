import { getRaces, getSpells } from "$lib/utils/dndApi";
import { expect, test } from "vitest";
import { get } from "svelte/store";
import { raceStore, spellStore } from "$lib/stores";
import { Race } from "$lib/types/race";

test("getRaces", async () => {
  await getRaces();

  let loadedRaces: Race[] = get(raceStore).races;

  expect(loadedRaces).not.toBeNull();
});

test("getSpells", async () => {
  await getSpells();

  let loadedSpells: Race[] = get(spellStore);

  expect(loadedSpells).not.toBeNull();
});
