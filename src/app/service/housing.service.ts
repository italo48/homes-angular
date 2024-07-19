import { Injectable } from "@angular/core";
import { HousingLocation } from "../components/housing-location/housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";
  constructor() {}

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? []; // subistituir pelo http cliente do angular
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
