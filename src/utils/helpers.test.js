import { getSortedList, vote } from "./helpers.js";

describe("Unit tests of helpers", () => {
    test("Testing getSortedList()", () => {
        const list = [
            {
                counter: 1,
                id: 1
            },
            {
                counter: 0,
                id: 2
            }
        ];

        expect(getSortedList(list, "asc")[0].counter).toEqual(0);

        expect(getSortedList(list, "desc")[0].counter).toEqual(1);

        expect(getSortedList(list)[0].counter).toEqual(0);
    });

    test("Testing vote()", () => {
        const list = [
            {
                counter: 1,
                id: 1
            }
        ];

        expect(vote(list, 1, "up")[0].counter).toEqual(2);

        expect(vote(list, 1, "down")[0].counter).toEqual(1);
    });
});
