"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuery = void 0;
const primeCalculator_1 = require("./primeCalculator");
const parseQuery = (qr) => {
    const nums = qr.split(",");
    const arrOfNum = nums.map((str) => {
        return Number(str);
    });
    const sum = arrOfNum.reduce((a, b) => a + b, 0);
    const prime2 = (0, primeCalculator_1.isPrime)(sum);
    return { sum: sum, prime2: prime2 };
};
exports.parseQuery = parseQuery;
//# sourceMappingURL=parseQuery.js.map