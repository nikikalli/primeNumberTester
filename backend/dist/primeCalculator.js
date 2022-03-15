"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false;
    console.log(num);
    return num > 1;
};
exports.isPrime = isPrime;
//# sourceMappingURL=primeCalculator.js.map