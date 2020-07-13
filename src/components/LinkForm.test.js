import React, { useContext } from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { renderWithContextAndRouter } from "../utils/testUtils.js";
import LinkVoteContextProvider, { LinkVoteContext } from "../contexts/LinkVoteContext.js";

import LinkForm from "./LinkForm.jsx";

describe("LinkForm component unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("Should contain `#linkForm` element", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkForm/>);

        expect(getByTestId("linkForm")).toBeInTheDocument();
    });

    test("Should add the item to store after form submit", () => {
        const { getByTestId } = renderWithContextAndRouter(<LinkForm/>);

        fireEvent.change(getByTestId("name"), {
            target: {
                value: "A"
            }
        });

        fireEvent.change(getByTestId("url"), {
            target: {
                value: "B"
            }
        });

        fireEvent.click(getByTestId("add"));

        const MockComponent = () => {
            const { links } = useContext(LinkVoteContext);

            return (
                <>{links[0].name}-{links[0].url}</>
            );
        };
        const { container } = render(
            <LinkVoteContextProvider value={LinkVoteContext}>
                <MockComponent/>
            </LinkVoteContextProvider>
        );

        expect(container.innerHTML).toMatch("A-B");
    });
});
