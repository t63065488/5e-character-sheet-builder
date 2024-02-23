import RandomScores from "$lib/components/ability-score/RandomScores.svelte";
import { AbilityScore } from "$lib/types/abilityScore";
import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";
import { afterEach, describe, expect, test, vi } from "vitest";

describe('Component testing', () => {
    afterEach(() => {
        cleanup();
    })
    
    test("Should render", async () => {
        const node = render(RandomScores, {  });
        expect(node.component).not.toBe(null);
    })
    
    test("Should call roll function on click", async () => {
        // Arrange
        const { component } = render(RandomScores, {})
        const button = screen.getByText("Roll!");
        // Act
        await fireEvent.click(button);
    
        // Assert
        
    })
})
