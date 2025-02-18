import { calculate } from "../src/script";
describe("Calculator Tests", () => {
    test("should return 5 when adding 2 + 3", () => {
        expect(calculate("2", "+", "3")).toBe(5);
    });
    test("should return 1 when subtracting 4 - 3", () => {
        expect(calculate("4", "-", "3")).toBe(1);
    });
    test("should return 10 when multiplying 2 * 5", () => {
        expect(calculate("2", "*", "5")).toBe(10);
    });
    test("should return 2 when dividing 10 / 5", () => {
        expect(calculate("10", "/", "5")).toBe(2);
    });
    test("should return 'Error' when dividing by 0", () => {
        expect(calculate("10", "/", "0")).toBe("Error");
    });
    test("should return 'Invalid Operation' for an unknown operator", () => {
        expect(calculate("10", "%", "2")).toBe("Invalid Operation");
    });
});
