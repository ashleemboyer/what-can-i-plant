import { useState } from "react";
import styles from "../styles/pages.module.scss";

const data = {
  spring: [
    {
      name: "Blue Jazz",
      cost_pierre: 30,
      profit_pierre: 2.86,
      days: 7,
      sells_for: [50, 62, 75],
    },
    {
      name: "Cauliflower",
      cost_pierre: 80,
      profit_pierre: 7.92,
      days: 12,
      sells_for: [175, 218, 262],
    },
    {
      name: "Garlic",
      cost_pierre: 40,
      profit_pierre: 5.0,
      days: 4,
      sells_for: [60, 75, 90],
    },
    {
      name: "Green Bean",
      cost_pierre: 60,
      days: 10,
      regrowth: 3,
      sells_for: [40, 50, 60],
    },
    {
      name: "Kale",
      cost_pierre: 70,
      profit_pierre: 6.67,
      days: 6,
      sells_for: [110, 137, 165],
    },
    {
      name: "Parsnip",
      cost_pierre: 20,
      profit_pierre: 3.75,
      days: 4,
      sells_for: [35, 43, 52],
    },
    {
      name: "Potato",
      cost_pierre: 50,
      profit_pierre: 5.0,
      days: 6,
      sells_for: [80, 100, 120],
    },
    {
      name: "Tulip",
      cost_pierre: 20,
      profit_pierre: 1.67,
      days: 6,
      sells_for: [30, 37, 45],
    },
    {
      name: "Strawberry",
      cost_egg_festival: 100,
      days: 8,
      regrowth: 4,
      sells_for: [120, 150, 180],
    },
    {
      name: "Rhubarb",
      cost_oasis: 100,
      profit_oasis: 9.23,
      days: 13,
      sells_for: [220, 275, 330],
    },
    {
      name: "Coffee Bean",
      cost_traveling_cart: 2500,
      days: 10,
      regrowth: 2,
      sells_for: [15, 18, 22],
      yields: 4,
    },
  ],
  summer: [
    {
      name: "Blueberry",
      cost_pierre: 80,
      days: 13,
      regrowth: 4,
      sells_for: [50, 62, 75],
    },
    {
      name: "Corn",
      cost_pierre: 150,
      days: 14,
      regrowth: 4,
      sells_for: [50, 62, 75],
    },
    {
      name: "Hops",
      cost_pierre: 60,
      days: 11,
      regrowth: 1,
      sells_for: [25, 31, 37],
    },
    {
      name: "Hot Pepper",
      cost_pierre: 40,
      days: 5,
      regrowth: 3,
      sells_for: [40, 50, 60],
    },
    {
      name: "Melon",
      cost_pierre: 80,
      profit_pierre: 14.17,
      days: 12,
      sells_for: [250, 312, 375],
    },
    {
      name: "Poppy",
      cost_pierre: 100,
      profit_pierre: 5.71,
      days: 7,
      sells_for: [140, 175, 210],
    },
    {
      name: "Radish",
      cost_pierre: 40,
      profit_pierre: 8.33,
      days: 6,
      sells_for: [90, 112, 135],
    },
    {
      name: "Red Cabbage",
      cost_pierre: 100,
      profit_pierre: 17.78,
      days: 9,
      sells_for: [260, 325, 390],
    },
    {
      name: "Starfruit",
      cost_oasis: 400,
      profit_oasis: 26.92,
      days: 13,
      sells_for: [750, 937, 1125],
    },
    {
      name: "Summer Spangle",
      cost_pierre: 50,
      profit_pierre: 5,
      days: 8,
      sells_for: [90, 112, 135],
    },
    {
      name: "Sunflower",
      cost_pierre: 200,
      profit_pierre: -15.0,
      days: 8,
      sells_for: [80, 100, 120],
    },
    {
      name: "Tomato",
      cost_pierre: 50,
      days: 11,
      regrowth: 4,
      sells_for: [60, 75, 90],
    },
    {
      name: "Wheat",
      cost_pierre: 10,
      profit_pierre: 3.75,
      days: 4,
      sells_for: [25, 31, 37],
    },
  ],
  fall: [
    {
      name: "Corn",
      cost_pierre: 150,
      days: 14,
      regrowth: 4,
      sells_for: [50, 62, 75],
    },
    {
      name: "Amaranth",
      cost_pierre: 70,
      days: 7,
      sells_for: [150, 187, 225],
    },
    {
      name: "Artichoke",
      cost_pierre: 30,
      days: 8,
      sells_for: [160, 200, 240],
    },
    {
      name: "Beet",
      cost_oasis: 20,
      days: 6,
      sells_for: [100, 125, 150],
    },
    {
      name: "Bok Choy",
      cost_pierre: 50,
      days: 4,
      sells_for: [80, 100, 120],
    },
    {
      name: "Cranberries",
      cost_pierre: 240,
      days: 7,
      regrowth: 5,
      yields: 2,
      sells_for: [150, 187, 225],
    },
    {
      name: "Amaranth",
      cost_pierre: 70,
      days: 7,
      sells_for: [75, 93, 112],
    },
    {
      name: "Eggplant",
      cost_pierre: 20,
      days: 5,
      regrowth: 5,
      sells_for: [60, 75, 90],
    },
    {
      name: "Fairy Rose",
      cost_pierre: 200,
      days: 12,
      sells_for: [290, 362, 435],
    },
    {
      name: "Grape",
      cost_pierre: 60,
      days: 10,
      regrowth: 3,
      sells_for: [80, 100, 120],
    },
    {
      name: "Pumpkin",
      cost_pierre: 100,
      days: 13,
      sells_for: [320, 400, 480],
    },
    {
      name: "Yam",
      cost_pierre: 60,
      days: 10,
      sells_for: [160, 200, 240],
    },
  ],
};

const getPlantableSeeds = (season, day) => {
  const plantableSeeds = [];

  Object.keys(data[season]).forEach((seedId) => {
    const seed = data[season][seedId];
    const daysLeft = 28 - day;
    const isPlantable = daysLeft > seed.days;
    if (isPlantable) {
      plantableSeeds.push(seed);
    }
  });

  return plantableSeeds;
};

const getProfit = (day, cost, sellsFor, days, regrowth = 0, yields = 1) => {
  let totalSale = sellsFor;

  if (regrowth) {
    let tempDay = day + regrowth;
    while (tempDay <= 28) {
      totalSale += sellsFor;
      tempDay += regrowth;
    }
  }

  return +(yields * totalSale - cost).toFixed(2);
};

const HomePage = () => {
  const [season, setSeason] = useState("spring");
  const [day, setDay] = useState();

  return (
    <div className={styles.HomePage}>
      <label>What season is it?</label>
      <select
        value={season}
        onChange={(e) => {
          setSeason(e.target.value);
        }}
      >
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </select>
      <label>What day is it? (1-28)</label>
      <input
        type="number"
        min="1"
        max="28"
        step="1"
        value={day}
        onChange={(e) => {
          setDay(+e.target.value);
        }}
      />
      {season && day && (
        <>
          {getPlantableSeeds(season, day)
            .sort((a, b) => {
              const aCostKey = Object.keys(a).filter((key) =>
                key.startsWith("cost")
              );
              const bCostKey = Object.keys(b).filter((key) =>
                key.startsWith("cost")
              );

              const aCost = a[aCostKey];
              const bCost = b[bCostKey];

              const aProfit = getProfit(
                day,
                aCost,
                a.sells_for[0],
                a.days,
                a.regrowth,
                a.yields
              );
              const bProfit = getProfit(
                day,
                bCost,
                b.sells_for[0],
                b.days,
                b.regrowth,
                b.yields
              );

              console.log(aProfit, bProfit);

              return aProfit > bProfit ? -1 : 1;
            })
            .map((seed) => (
              <div className={styles.PlantableSeedInfo}>
                <p>
                  <strong>{seed.name}</strong>
                </p>
                {Object.keys(seed)
                  .filter((key) => key.startsWith("cost"))
                  .map((cost) => (
                    <p>
                      {cost.substring("cost_".length)}: {seed[cost]}g =>
                      possible profit:{" ~"}
                      {getProfit(
                        day,
                        seed[cost],
                        seed.sells_for[0],
                        seed.days,
                        seed.regrowth,
                        seed.yields
                      )}
                      g
                    </p>
                  ))}
                {seed.regrowth && (
                  <p>
                    Regrowth: {seed.regrowth}
                    {` day${seed.regrowth > 1 ? "s" : ""}`}
                  </p>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
