import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  errorMessage: string = "";

  error: boolean = false;

  constructor (private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data:any) =>{
        this.loading= false;
        this.nuevasCanciones = data;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorServicio.error.error.message;
      })
  }
}
