import Elysia from "elysia";
import { getAllPlanets } from "./planets.controller";
import requestLogger from "../middleware/recordLogger";

const planets = new Elysia({ prefix: "/plants" });

planets.get("/", ({ request, body, params, headers, response }) => {
    const startTime = new Date();
    requestLogger(startTime, request, body, params, headers);
    console.log({ request, body, params, response });
    const value = getAllPlanets();
    return value;
}, {
    afterHandle({ response }) {
        console.log("Response send to -->", response);
    },
});

export default planets;
