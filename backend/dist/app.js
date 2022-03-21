"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const primeCalculator_1 = require("./services/primeCalculator");
const parseQuery_1 = require("./services/parseQuery");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
let prime1 = false;
let prime2 = false;
let sum = 0;
app.get("/", (req, res) => {
    res.json({
        firstendpoint: prime1,
        secondendpoint: prime2,
        sum: sum,
    });
});
app.post("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const action = req.query.action;
    if (action === "checkprime") {
        const num = req.query.number;
        prime1 = (0, primeCalculator_1.isPrime)(Number(num));
        res.status(200);
    }
    else if (action === "sumandcheck") {
        const obj = (0, parseQuery_1.parseQuery)(req.query.numbers);
        prime2 = obj.prime2;
        sum = obj.sum;
        res.status(200);
    }
    else {
        return res.status(400).json({
            error: "wrong request",
        });
    }
    res.send();
}));
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map