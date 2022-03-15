import { isPrime } from "./primeCalculator";
import { QrType } from "../types/type";

export const parseQuery = (qr: QrType) => {
  const nums = (qr as string).split(",");

  const arrOfNum = nums.map((str) => {
    return Number(str);
  });

  const sum = arrOfNum.reduce((a, b) => a + b, 0);
  const prime2 = isPrime(sum);
  return { sum: sum, prime2: prime2 };
};
