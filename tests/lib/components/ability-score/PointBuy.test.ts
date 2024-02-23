import PointBuy from "$lib/components/ability-score/PointBuy.svelte";
import { render, cleanup } from "@testing-library/svelte";
import { afterEach, expect, test } from "vitest";

afterEach(() => {
    cleanup();
})

test("Should render", async () => {
    const node = render(PointBuy, {});
    expect(node.component).not.toBe(null);
})
