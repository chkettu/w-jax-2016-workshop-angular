
import {Injectable, Input} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Flight} from "../../entities/flight";

@Injectable()
export class FlightService {


    public flights: Array<Flight> = [];

    constructor(private http: Http) {
    }

    findById(id: string): Observable<Flight> {
        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('id', id);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this
            .http
            .get(url, { search, headers })
            .map(resp => resp.json());

    }

    save(flight: Flight): Observable<Flight> {
        let url = 'http://www.angular.at/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this
            .http
            .post(url, flight, { headers })
            .map(resp => resp.json());

    }



    find(from: string, to: string): void {
        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json())
                .subscribe(
                    (flights: Array<Flight>) => {
                        this.flights = flights;
                    },
                    (err) => {
                        console.error('Error', err);
                    }
                )

    }

}