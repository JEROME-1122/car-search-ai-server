import express from "express";
import cors from "cors";
import cars from "./cars.json" with { type: "json" };
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ Success: "App runnning " });
});

app.post("/recommend", (req, res) => {
  try {
    const { budget, fuel, priority } = req.body;

    //validation
    if (!budget || !fuel || !priority) {
      return res
        .status(400)
        .json({ messge: "Butget, fuel and priority are required" });
    }

    //filter the car budget and fuel
    const filterCars = cars.filter(
      (cars) =>
        cars.price <= budget &&
        cars.fuel.toLocaleLowerCase() === fuel.toLocaleLowerCase(),
    );
    // res.json(filterCars);

    //priority

    const priorityCars = filterCars.map((cars) => {
      let score = 0;
      if (priority === "mileage") {
        score = cars.mileage;
      }
      if (priority === "safety") {
        score = cars.safety;
      }
      return { ...cars, score };
    });
    priorityCars.sort((a, b) => b.safety - a.safety);
    res.json(priorityCars.slice(0, 3));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(5000, () => {
  console.log("port running on 5000");
});
