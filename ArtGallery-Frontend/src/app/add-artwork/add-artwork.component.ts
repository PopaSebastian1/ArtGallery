import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtworkService } from '../artwork-service';
import { DataService } from '../user-service';

@Component({
  selector: 'app-add-artwork',
  templateUrl: './add-artwork.component.html',
  styleUrl: './add-artwork.component.css'
})
export class AddArtworkComponent {
   artworkForm: FormGroup;
   artwork: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private artworkService: ArtworkService, public userService:DataService) {
    this.artworkForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: new FormControl(''), 
      imagePath: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.artworkForm.value);
    if (this.artworkForm.valid) {
      
      this.artwork = this.artworkForm.value;
      const category = this.artwork.category;
      this.artwork.category = category.charAt(0).toUpperCase() + category.slice(1);
      this.artworkService.addArtwork(this.artwork).subscribe(data => {
        this.router.navigate(['/home']);
      });
    }
  }
  }
