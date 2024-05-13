import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../artwork-service';
import {DataService} from '../user-service';
@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {
  id: string;
  artwork: any;

  constructor(private route: ActivatedRoute, private artworkService: ArtworkService, public userService: DataService) { 
this.id = this.route.snapshot.paramMap.get('id')?? '';
  }

  ngOnInit() {
   this.artworkService.getArtworkById(this.id).subscribe(data => {
    this.artwork = data;
    console.log(this.userService.getUserData());
   });
  }
}