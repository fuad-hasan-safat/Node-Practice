import { parse } from "jsr:@std/csv";

async function readCSV(filePath: string) {
  const data = await Deno.readTextFile(filePath);
  const allRow = data.trim().split("\n");
  let headerRow = "";
  for (var line of allRow) {
    if (line[0] !== "#") {
      headerRow = line;
      break;
    }
  }

  const columns = headerRow.split(",");

  const records = parse(data, {
    comment: "#",
    columns: columns.map((col) => col.trim()),
  });

  return records;
}

const filePath = "kepler_data.csv";
const csvData = await readCSV(filePath);
const habitablePlanets = [];

function isHabitablePlanet(planet: any) {
  return planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6;
}

for (const planet of csvData) {
  if (isHabitablePlanet(planet)) {
    habitablePlanets.push(planet);
  }
}
console.log(habitablePlanets.map((planate) =>{
  return planate['kepler_name']
}))
console.log(`${habitablePlanets.length} habitable planets found!`);
