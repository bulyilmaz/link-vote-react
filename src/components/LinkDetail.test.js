import React from "react";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

import { renderWithContextAndRouter } from "../utils/testUtils.js";

import LinkDetail from "./LinkDetail.jsx";

const propsData = {
    link: {
        name: "name",
        url: "url",
        counter: 1,
        id: 1
    }
};

describe("LinkDetail component unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("Should contain `name-1` text", () => {
        const { container } = renderWithContextAndRouter(<LinkDetail {...propsData}/>);

        expect(container.innerHTML).toMatch("name");
    });

    test("Should contain `up, down, remove` buttons", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkDetail {...propsData}/>);

        expect(getByTestId("up")).toBeInTheDocument();
        expect(getByTestId("down")).toBeInTheDocument();
        expect(getByTestId("remove")).toBeInTheDocument();
    });
});
