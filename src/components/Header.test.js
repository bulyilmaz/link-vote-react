import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

import { renderWithContextAndRouter } from "../utils/testUtils.js";

import Header from "./Header.jsx";
import App from "./App";

describe("Header component unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("Should contain `#header` element", () => {
        const { getByTestId } = renderWithContextAndRouter(<App/>);

        expect(getByTestId("header")).toBeInTheDocument();
    });

    test("Should contain `hepsiburada` text", () => {
        const { container } = renderWithContextAndRouter(<Header/>);

        expect(container.innerHTML).toMatch("hepsiburada");
    });
});
