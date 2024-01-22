import FormContainer from "$lib/components/FormContainer.svelte";
import { render } from "@testing-library/svelte";

test("Should render", () => {
  const result = render(FormContainer);
  expect(result.component).not.toBeNull();
});
