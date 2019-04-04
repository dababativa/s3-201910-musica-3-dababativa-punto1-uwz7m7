
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from './grupo';
import { AlbumDetail } from './album-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const grupos = 'grupos.json';

/**
* The service provider for everything related to grupos
*/
@Injectable()
export class GrupoService {

  /**
  * Constructor of the service
  * @param http The HttpClient - This is necessary in order to perform requests
  */
  constructor(private http: HttpClient) { }


  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(API_URL + grupos);
  }

  /**
 * Returns the Observable object containing the grupo retrieved from the API
 * @returns The grupo
 */
  getAlbumDetail(albumId): Observable<AlbumDetail> {
    console.log(albumId + " " + API_URL + "album-" + albumId + ".json");
    return this.http.get<AlbumDetail>(API_URL + "album-" + albumId + ".json");
  }

}