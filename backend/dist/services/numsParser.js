"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numsParser = void 0;
const primeCalculator_1 = require("../primeCalculator");
const numsParser = (arr) => {
    const nums = arr.split(",");
    const arrOfNum = nums.map((str) => {
        return Number(str);
    });
    const sum = arrOfNum.reduce((a, b) => a + b, 0);
    return { state: (0, primeCalculator_1.isPrime)(sum), sum: sum };
};
exports.numsParser = numsParser;
//# sourceMappingURL=numsParser.js.map