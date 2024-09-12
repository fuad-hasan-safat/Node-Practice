import { parse } from "jsr:@std/csv"
async function readCSV(filePath: string) {

  const data = await Deno.readTextFile(filePath);
  const [headerRow, ...dataRows] = data.trim().split('\n');
  console

const columns = headerRow.split(',');

  const records = parse(data, {
    //skipFirstRow: true,
    comment: '#',
    columns: columns.map(col => col.trim()),
  });

  console.log('record : ', records)
  
  return records;
}

const filePath = "kepler_data.csv";
const csvData = await readCSV(filePath);



const habitablePlanets = [];

function isHabitablePlanet(planet: any) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
let i = 0
for(const planet in csvData){
  if(i<20){
    console.log(planet)

  }
i = i + 1
  if(isHabitablePlanet(planet)){
    habitablePlanets.push(planet)
  }
}

console.log(`${habitablePlanets.length} habitable planets found!`);
