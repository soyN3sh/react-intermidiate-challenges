import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound.page";

describe("NotFound tests", () => {
  it("render not found gif", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const notFoundGif = document.querySelector("#notFoundGif");
    expect(notFoundGif).toBeInTheDocument();
  });
});
