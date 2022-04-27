import { Component } from '@angular/core';
// import { HttpClient} from '@angular/common/http'
import { Video } from '../types';
// import { videoData } from '../videoList-data';
import { VideoDataService } from '../../video-data.service';


// const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent  {
  videoList: Video[] = [];
  currentVideo: Video | undefined;
  chooseVideo(video: Video) {
    this.currentVideo = video;
  }
  // videoList = videoData;
  // currentVideo: Video | undefined;
  // chooseVideo(video: Video) {
  //   this.currentVideo = video;
    // constructor(http: HttpClient) {
    //   http
    //     .get<Video[]>(apiUrl + '/videos')
    //     .subscribe((videos) => (this.videoList = videos));
    // }
    constructor(vds: VideoDataService)  {
      vds.loadVedios().subscribe(videos => {
        this.videoList = videos;
    });
  }
}
