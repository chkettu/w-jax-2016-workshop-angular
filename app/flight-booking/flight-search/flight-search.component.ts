import {Component} from "@angular/core";
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {FlightService} from "../services/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    public date: string = (new Date()).toISOString();

    public selectedFlight: Flight;


    constructor(
        private flightService: FlightService) {
    }

    // cmp.flights
    public get flights() {
        return this.flightService.flights;
    }

    public search(): void {

            this
                .flightService
                .find(this.from, this.to);




    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

}