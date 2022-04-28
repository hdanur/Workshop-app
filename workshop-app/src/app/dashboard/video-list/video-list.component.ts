import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../types';
import { VideoWithThumbnail } from '../video-dashboard/video-dashboard.component';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent{
  @Input() videos: VideoWithThumbnail[] = [];
  @Input() selectedVideo?: Video;
  @Output() videoSelected = new EventEmitter<Video>();
}


