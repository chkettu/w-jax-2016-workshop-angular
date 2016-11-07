import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FlightService} from "../services/flight.service";
import {Flight} from "../../entities/flight";

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent {

    id: string;
    flight: Flight;
    message: string;

    constructor(route: ActivatedRoute, private flightService: FlightService) {

        route.params.subscribe((p) => {
            this.id = p['id'];

            flightService
                .findById(this.id)
                .subscribe(
                    (flight: Flight) => {
                        this.flight = flight;
                    },
                    (err) => {
                        console.error(err);
                    }
                )


        });

    }

    save() {
        this
            .flightService
            .save(this.flight)
            .subscribe(
                (flight) => {
                    this.flight = flight;
                    this.message = "Datensatz wurde gespeichert!";
                },
                (err) => {
                    console.error('Fehler beim Speichern', err);
                    this.message = "Fehler beim Speichern: " + err.text();
                }
            );
    }

}