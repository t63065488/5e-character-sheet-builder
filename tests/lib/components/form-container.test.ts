import FormContainer from "$lib/components/FormContainer.svelte";
import { render } from "@testing-library/svelte";
import { test, expect } from "vitest";

test("Should render", () => {
  const result = render(FormContainer);
  expect(result.component).not.toBeNull();
});
