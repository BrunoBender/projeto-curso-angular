import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]
 
  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    //passa o valor recebido para a propriedade this.restaurants
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants); 
  }

}
