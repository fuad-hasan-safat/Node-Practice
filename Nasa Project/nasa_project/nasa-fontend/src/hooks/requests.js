const baseApiUrl = `http://localhost:8000`;
async function httpGetPlanets() {
 const response = await fetch(`${baseApiUrl}/plants`);
 const data = await response.json();
 console.log(' planets response-> ', data);

 return data;
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};