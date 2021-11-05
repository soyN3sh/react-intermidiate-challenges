import { render, screen } from "@testing-library/react";
import Login from "../pages/Login/Login.page";
import GlobalContext from "../providers/Global/GlobalContext";

const initialState = {
  state: {
    user: { authenticated: false },
  },
  dispatch: jest.fn(),
};

const LoginWithContext = ({ state, dispatch }) => {
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      <Login />
    </GlobalContext.Provider>
  );
};

describe("Login tests", () => {
  it("renders Login correctly", () => {
    render(
      <LoginWithContext state={initialState} dispatch={initialState.dispatch} />
    );

    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");
    const submitButton = screen.getByRole("button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
