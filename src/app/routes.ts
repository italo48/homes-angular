import { Routes } from "@angular/router";
import { DetailsComponent } from "./components/details/details.component";
import { HomeComponent } from "./components/home/home.component";

export const routerConfig: Routes = [
  { path: "", component: HomeComponent, title: "Home Page" },
  { path: "details/:id", component: DetailsComponent, title: "Details" },
];
