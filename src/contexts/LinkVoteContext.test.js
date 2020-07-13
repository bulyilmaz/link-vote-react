import React, { useContext } from "react";
import { render, cleanup } from "@testing-library/react";

import LinkVoteContextProvider, { LinkVoteContext } from "./LinkVoteContext.js";

describe("LinkVoteContext unit tests", () => {
    afterEach(() => {
        cleanup();
    });

    test("Testing `links` value", () => {
        const initialData = {
            links: [
                {
                    name: "Hello"
                }
            ]
        };
        const MockComponent = () => {
            const { links } = useContext(LinkVoteContext);

            return (
                <>{links[0].name}</>
            );
        };
        const { container } = render(
            <LinkVoteContextProvider value={LinkVoteContext} {...initialData}>
                <MockComponent/>
            </LinkVoteContextProvider>
        );

        expect(container.innerHTML).toMatch("Hello");
    });
});