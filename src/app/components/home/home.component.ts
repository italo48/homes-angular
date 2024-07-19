import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingService } from "src/app/service/housing.service";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingLocationService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationService
      .getAllHousingLocation()
      .then((h: HousingLocation[]) => {
        this.housingLocationList = h;
        this.filteredLocationList = h;
      });
  }

  filterResults(filter: string) {
    if (!filter) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter((h) =>
      h?.city.toLowerCase().includes(filter)
    );
  }
}
