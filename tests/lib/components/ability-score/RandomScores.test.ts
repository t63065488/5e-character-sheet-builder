import RandomScores from "$lib/components/ability-score/RandomScores.svelte";
import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";
import { afterEach, describe, expect, test, vi } from "vitest";

describe("Component testing", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should render", async () => {
    const node = render(RandomScores, {});
    expect(node.component).not.toBe(null);
  });

  test("Should call roll function on click", async () => {
    // Arrange
    const { component } = render(RandomScores, {});
    const mock = vi.fn();
    component.$on("click", mock);

    const button = screen.getByText("Roll!");
    expect(button).not.toBeNull();
    // Act
    await fireEvent.click(button);

    // Assert
    expect(mock).toHaveBeenCalled();
  });
});
