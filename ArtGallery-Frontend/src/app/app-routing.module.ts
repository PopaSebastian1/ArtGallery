import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // adjust this import to your file structure
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';
import { AddArtworkComponent } from './add-artwork/add-artwork.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to `login-component`
  { path: 'login', component: LoginComponent },
  // other routes...
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'artwork/:category', component: ArtworkComponent},
  {path: 'artwork/details/:id', component: ArtworkDetailsComponent},
  {path: 'add-artwork', component: AddArtworkComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }