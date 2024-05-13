import { Component, OnInit} from '@angular/core';
import { DataService } from '../user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nume: string ='';
  slideIndex=0;
  slides = [
    { link: ['/artwork', 'Sculptures'], img: 'assets/sculpture.jpg', caption: 'Sculptures' },
    { link: ['/artwork', 'Paintings'], img: 'https://img.freepik.com/free-vector/canvas-painting_23-2147566881.jpg?w=740&t=st=1704897487~exp=1704898087~hmac=9591624bbe232f4fdafd82b44473dff735e5faf7fac0bde92962bd00619c237d', caption: 'Paintings' },
    { link: ['/artwork', 'All'], img: 'https://img.freepik.com/free-vector/colorful-cartoon-museum-card-set_1284-11070.jpg', caption: 'All' },
  ];
  plusSlides(n: number) {
    this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
  }
  constructor(public userServices:DataService) {
    
  }

 
}
