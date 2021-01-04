import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DemoPipe } from "./demoPipe";
import { CapitalPipe } from "./CapitalPipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DemoPipe, CapitalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
