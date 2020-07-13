import actionTypes from "../utils/actionTypes.js";
import LinkVoteReducer from "./LinkVoteReducer.js";

describe("LinkVoteReducer unit tests", () => {
    test("Testing `ADD_LINK`", () => {
        const state = [];
        const link = {
            name: "name",
            url: "url",
            counter: 1
        };
        const action = {
            type: actionTypes.ADD_LINK,
            link
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState[0].name).toEqual("name");
    });

    test("Testing `REMOVE_LINK`", () => {
        const state = [
            {
                id: 1
            }
        ];
        const action = {
            type: actionTypes.REMOVE_LINK,
            id: 1
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState.length).toEqual(0);
    });

    test("Testing `UP_VOTE`", () => {
        const state = [
            {
                counter: 1,
                id: 1
            }
        ];
        const action = {
            type: actionTypes.UP_VOTE,
            id: 1
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState[0].counter).toEqual(2);
    });

    test("Testing `DOWN_VOTE`", () => {
        const state = [
            {
                counter: 1,
                id: 1
            }
        ];
        const action = {
            type: actionTypes.DOWN_VOTE,
            id: 1
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState[0].counter).toEqual(0);
    });

    test("Testing `ORDER_BY_ASC`", () => {
        const state = [
            {
                counter: 1
            },
            {
                counter: 0
            }
        ];
        const action = {
            type: actionTypes.ORDER_BY_ASC
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState[0].counter).toEqual(0);
    });

    test("Testing `ORDER_BY_DESC`", () => {
        const state = [
            {
                counter: 0
            },
            {
                counter: 1
            }
        ];
        const action = {
            type: actionTypes.ORDER_BY_DESC
        };
        const newState = LinkVoteReducer(state, action);

        expect(newState[0].counter).toEqual(1);
    });

    test("Testing `ORDER_BY_DEFAULT`", () => {
        const state = [
            {
                counter: 0,
                id: 2
            },
            {
                counter: 1,
                id: 1
            }
        ];
        const action = {
            type: actionTypes.ORDER_BY_DESC
        };
        const state2 = LinkVoteReducer(state, action);

        expect(state2[0].counter).toEqual(1);

        const action2 = {
            type: actionTypes.ORDER_BY_DEFAULT
        };
        const newState = LinkVoteReducer(state2, action2);

        expect(newState[0].counter).toEqual(0);
    });
});