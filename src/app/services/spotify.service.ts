import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQApdxURj9b9vSlawNh9BAmAZU-s_dmiGgSoS_EBoDTb_OTc1wz7QeNE5ltN7MgEJTdYH4nJk4_vpsFI05yEv42E1HNFBZRyhnhAfNUAgkn6AmzFOU2W'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQApdxURj9b9vSlawNh9BAmAZU-s_dmiGgSoS_EBoDTb_OTc1wz7QeNE5ltN7MgEJTdYH4nJk4_vpsFI05yEv42E1HNFBZRyhnhAfNUAgkn6AmzFOU2W'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=remaster%20artist:${termino}.9&offset=0&limit=15`, {headers});

  }

}
