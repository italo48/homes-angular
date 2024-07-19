import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [HomeComponent, RouterModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
