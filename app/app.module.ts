import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {FlightService} from "./flight-booking/services/flight.service";
import {FlightCardComponent} from "./flight-booking/flight-search/flight-card.component";
import {DateComponent} from "./shared/date.component";
import {CityPipe} from "./shared/pipes/city.pipe";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        FlightSearchComponent,
        FlightCardComponent,
        DateComponent,
        CityPipe,
        HomeComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [
       FlightService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}