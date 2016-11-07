
import {Component, Input, OnChanges, SimpleChanges, EventEmitter, Output, OnInit} from "@angular/core";
@Component({
    selector: 'date-component',
    templateUrl: './date.component.html'
})
export class DateComponent implements OnChanges, OnInit{

    @Input() date: string;
    @Output() dateChange = new EventEmitter();

    day;
    month;
    year;
    hour;
    minute;

    constructor() {
        console.debug('constructor', this.date);
    }

    ngOnInit() {
        console.debug('init', this.date);
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.debug('change', this.date);

        let date = new Date(this.date);

        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }

    apply() {
        let date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.emit(date.toISOString());
    }

}