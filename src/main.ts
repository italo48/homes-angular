import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routerConfig } from "./app/routes";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routerConfig)],
}).catch((err) => console.error(err));
