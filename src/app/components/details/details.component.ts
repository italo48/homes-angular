import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "src/app/service/housing.service";
import { HousingLocation } from "../housing-location/housing-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingService.getHousingLocationById(housingLocationId).then((h) => {
      this.housingLocation = h;
    });
  }

  submitApplication() {
    const { firstName, lastName, email } = this.applyForm.value;
    this.housingService.submitApplication(
      firstName ?? "",
      lastName ?? "",
      email ?? ""
    );
    if (firstName && lastName && email) {
      alert(`${firstName} ${lastName}, your apply successfully send!`);
    } else {
      alert("Please type your data.");
    }
  }
}
