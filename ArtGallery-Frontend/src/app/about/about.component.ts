import { Component } from '@angular/core';
import { DataService } from '../user-service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(public userServices:DataService) {
}
}
