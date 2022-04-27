import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './dashboard/types';

const apiUrl = 'https://api.angularbootcamp.com';


@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  videoList: Video[] = [];

  constructor(private http: HttpClient){}

  loadVedios(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos')
  }


}
