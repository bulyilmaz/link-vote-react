import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent } from "@testing-library/react";

import { renderWithContextAndRouter } from "../utils/testUtils.js";

import LinkList from "./LinkList.jsx";

const initialData = {
    links: [
        {
            name: "name-1",
            url: "url-1",
            counter: 0,
            id: 1
        },
        {
            name: "name-2",
            url: "url-2",
            counter: 1,
            id: 2
        }
    ]
};

describe("LinkList component unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("Should contain `SUBMIT A LINK` text", () => {
        const { container } = renderWithContextAndRouter(<LinkList/>, initialData);

        expect(container.innerHTML).toMatch("SUBMIT A LINK");
    });

    test("Should contain `<option...` HTML content", () => {
        const { container } = renderWithContextAndRouter(<LinkList/>, initialData);

        expect(container).toContainHTML(`<option value="">Order by</option>`);
    });

    test("Should order by ascending after select `desc`", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkList/>, initialData);

        fireEvent.change(getByTestId("select"), {
            target: {
                value: "desc"
            }
        });

        expect(getByTestId("list").firstElementChild.innerHTML).toMatch("name-2");
    });

    test("Should order by descending after select `asc`", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkList/>, initialData);

        fireEvent.change(getByTestId("select"), {
            target: {
                value: "asc"
            }
        });

        expect(getByTestId("list").firstElementChild.innerHTML).toMatch("name-1");
    });

    test("Should increment the point after `Up Vote` button click", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkList/>, initialData);
        const firstItem = getByTestId("list").firstElementChild;
        const upButton = firstItem.querySelector("[data-testid='up']");
        const pointWrapper = firstItem.querySelector("[data-testid='point']");
        const point = pointWrapper.textContent;

        fireEvent.click(upButton);

        expect(pointWrapper).toHaveTextContent(Number(point) + 1);
    });

    test("Should decrement the point after `Down Vote` button click", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkList/>, initialData);
        const firstItem = getByTestId("list").firstElementChild;
        const downButton = firstItem.querySelector("[data-testid='down']");
        const pointWrapper = firstItem.querySelector("[data-testid='point']");
        const point = pointWrapper.textContent;

        fireEvent.click(downButton);

        expect(pointWrapper).toHaveTextContent(Number(point) - 1);
    });
});
