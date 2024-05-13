import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../artwork-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  artworks: any[];
  category: string;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { 
    this.category = this.route.snapshot.paramMap.get('category')?? '';
  }
  
  ngOnInit(): void {
    this.artworkService.getArtworkByCategory(this.category).subscribe(data => {
      this.artworks = data;
    });
  }
}