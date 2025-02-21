import { convertUSDToEUR } from "./currency_converter.js";


describe('currency converter', () => {
    beforeAll(() => {
        let currancyConeverter = convertUSDToEUR();
        let newCurrancyConverter = jest.fn(() => convertUSDToEUR());
    });

    test(" new acurancy return same acurancy",()=>{
        const euro = 2;
        let newCurrancy = newCurrancy(euro);
        expect(newCurrancy).toBe(2);
    });
});