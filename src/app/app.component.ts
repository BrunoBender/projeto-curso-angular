import {Component, OnInit} from "@angular/core"
import {HeaderComponent} from "app/header/header.component"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
