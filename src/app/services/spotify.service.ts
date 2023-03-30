import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCXrr7kixSNrTXpPIX5ZSW1NZtKYnZURTFQh-y3gCM2nGOCThi6CsXZnP6NHfEXUJyOh4_T1zIVY3ByCqbDDp-8AG-gcDYl0oQMiGKEYqEnFlPtDNmA'
    })

    return this.http.get(url, {headers});

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map((data:any) => data.albums.items));
      
  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map((data:any) => data.artists.items));

  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
  }

}
