import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "../components/App/App.component";
import * as mockPicture from "../../public/mock-nasa.json";
import GlobalContext from "../providers/GlobalContext";

const mockFetch = (mockData) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      statusText: "OK",
    })
  );
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

const mockFetchError = () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.reject({
      msg: "No api_key was supplied. Get one at https://api.nasa.gov:443",
    })
  );
};

const initialState = {
  state: {
    apiParams: {
      date: "2021-10-30",
    },
    error: {
      message: "",
      exists: false,
    },
  },
};

const mockDispatch = jest.fn();

const AppWithContext = ({ state, dispatch }) => {
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      <App />
    </GlobalContext.Provider>
  );
};

describe("App tests", () => {
  afterEach(() => {
    mockFetchCleanUp();
  });

  it("render title correctly", async () => {
    mockFetch(mockPicture);
    await act(async () => {
      render(<App />);
    });

    const appTitle = document.querySelector("#appTitle");

    expect(appTitle).toBeInTheDocument();
  });

  it("renders picture of the day", (done) => {
    mockFetch(mockPicture);
    act(async () => {
      render(<AppWithContext state={initialState} dispatch={mockDispatch} />);
    }).then(() => {
      const title = screen.getByText(mockPicture.title);
      const img = screen.getByRole("img");
      expect(title).toBeInTheDocument();
      expect(img.getAttribute("src")).toBe(mockPicture.url);
      done();
    });
  });

  it("renders correctly when API call error", (done) => {
    const tmpState = {
      state: {
        apiParams: {
          date: "2021-10-30",
        },
        error: {
          exists: true,
        },
      },
    };

    mockFetchError();
    act(async () => {
      render(<AppWithContext state={tmpState} dispatch={mockDispatch} />);
    }).then(() => {
      const errorMessage = document.querySelector("#errorMessage");
      expect(errorMessage).toBeInTheDocument();
      done();
    });
  });
});
