import { Component, OnInit , ViewChild, ElementRef,Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {
  // demoVideo :HTMLVideoElement;
  @Input() url: any;
  name: string;
  @ViewChild('jum',{ static: true }) demoVideo?: ElementRef;
  // xyx:any;
  constructor(private _sanitizer : DomSanitizer) { }

  ngOnInit() {
    // this.url = 'https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.webm'
    this.name = 'vishal';
  }

  playVideo(event) {
    // console.log(event.target.children[0].children[0].children[0])
    // this.xyx = document.getElementById("#jum");
    // console.log(this.xyx)

    //you can use method below as well

    // this.demoVideo = event.target.children[0].children[0].children[0];
    // event.target.children[0].children[0].children[0];;
    // event.target.children[0].children[0].children[0];
    //this.demoVideo.play();
    this.demoVideo.nativeElement.play();
  }
  stopVideo(){
    // this.demoVideo.pause();
    this.demoVideo.nativeElement.pause();
  }

}
