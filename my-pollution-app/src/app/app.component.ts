import { Component } from '@angular/core';
import { PollutionFormComponent } from './pollution-form/pollution-form.component';
import { PollutionListComponent } from './pollution-list/pollution-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PollutionFormComponent,  PollutionListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pollution-app';
}
