
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Flight} from "../../entities/flight";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter();

    select() {
        this.selectedChange.emit(true);
    }

}
