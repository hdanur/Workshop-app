import { Component } from '@angular/core';
// import { HttpClient} from '@angular/common/http'
import { Video } from '../types';
// import { videoData } from '../videoList-data';
import { VideoDataService } from '../../video-data.service';
import { map, Observable } from 'rxjs';

export interface VideoWithThumbnail extends Video {
  imgUrl: string;
}
// const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent  {
  videoList: Observable<VideoWithThumbnail[]>;
  currentVideo: Video | undefined;
  // videoList: Video[] = [];
  constructor(vds: VideoDataService) {
    this.videoList = vds.loadVedios().pipe(
      map((videos) =>
        videos.map((video) => ({
          imgUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
          ...video,
        }))
      )
    );
  }

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

  }
