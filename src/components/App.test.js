import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent } from "@testing-library/react";

import { renderWithContextAndRouter } from "../utils/testUtils.js";

import App from "./App.jsx";

describe("App component unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("`#container` element should be in the document", () => {
        const { getByTestId } = renderWithContextAndRouter(<App/>);

        expect(getByTestId("container")).toBeInTheDocument();
    });

    test("Should render the LinkList component by default", () => {
        const { getByTestId } = renderWithContextAndRouter(<App/>);

        expect(getByTestId("linkList-content")).toBeInTheDocument();
    });

    test("Should render the LinkForm component after `#addLink` button click", () => {
        const { getByTestId } = renderWithContextAndRouter(<App/>);

        fireEvent.click(getByTestId("addLink"));

        expect(getByTestId("linkForm")).toBeInTheDocument();
    });
});
