import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent]
})
export class AppComponent {
  title = 'app works!';
}
