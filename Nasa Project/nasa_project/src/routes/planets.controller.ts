import { planets } from "../models/planets.model";


export function getAllPlanets(){
    console.log('calling all plants ', planets)
    return planets
}