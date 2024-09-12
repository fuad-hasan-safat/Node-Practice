import * as parser from "@std/fs/";
import * as fs from "@std/fs/";
import { parse,  } from "@std/csv";


import {  } from "https://deno.land/std@0.201.0/csv/mod.ts";

async function readCSVFile(filePath: string) {
  // Step 1: Read the CSV file as text
  const csvFileContent = await Deno.readTextFile(filePath);

  // Step 2: Parse the CSV content
  const csvData = [];
  for await (const row of readCSV(csvFileContent)) {
    csvData.push(row);
  }

  // Step 3: Display the parsed CSV data
  console.log(csvData);
}

// Usage
const filePath = "./your_file.csv"; // Replace with your file path
await readCSVFile(filePath);