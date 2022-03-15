import express from "express";
import cors from "cors";
import { isPrime } from "./services/primeCalculator";
import { parseQuery } from "./services/parseQuery";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

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

app.post("/api", async (req, res) => {
  const action = req.query.action;

  if (action === "checkprime") {
    const num = req.query.number;
    console.log(num);

    prime1 = isPrime(Number(num));
    res.status(200);
  } else if (action === "sumandcheck") {
    const obj = parseQuery(req.query.numbers);

    prime2 = obj.prime2;
    sum = obj.sum;
    res.status(200);
  } else {
    return res.status(400).json({
      error: "wrong request",
    });
  }

  res.send();
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

module.exports = app;
