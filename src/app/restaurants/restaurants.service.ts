import {ErrorHandler} from 'app/app.error-handler';
import {Restaurant} from "./restaurant/restaurant.model";
import {MEAT_API} from "app/app.api"
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService{
    constructor(private http: Http){}

    getRestaurants(): Observable<Restaurant[]>{
        //converte o retorno response para o tipo json, podendo assim retornar um Observable<Restorant[]>
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getRestaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getReviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}