import { render, screen } from "@testing-library/svelte";
import App from "./App.svelte";

test("should render correctly", async () => {
  render(App);

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
});
