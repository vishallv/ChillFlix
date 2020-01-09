import { Component, OnInit, Input, ViewChild, ElementRef, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // @ViewChild('allt',{ static: true }) demoVideo?: ElementRef;
  // demoVideo :HTMLVideoElement;
  // url : any;
  @Input() moviesUrl:any;
  constructor(private _sanitizer : DomSanitizer) { }

  ngOnInit() {
   
  // this.moviesUrl = [
  //   {name:'https://ak7.picdn.net/shutterstock/videos/19001497/preview/stock-footage-friends-playing-basketball-at-park-overhead-shot-of-tip-off.webm',mo:'Basketball'},
  //   {name:'https://ak7.picdn.net/shutterstock/videos/27940027/preview/stock-footage-a-dark-zombie-with-red-eyes-entered-the-room-an-abandoned-house-with-a-monster-inside-in-black-and.webm',mo:'Zombie'},
  //   {name:'https://ak5.picdn.net/shutterstock/videos/4926755/preview/stock-footage-bristol-september-break-dancing-b-boy-jam-competition-long-sequence-september-in.webm',mo:'Dancing'},
  //   {name:'https://ak8.picdn.net/shutterstock/videos/28860478/preview/stock-footage-young-man-at-the-movie-theatre-reacts-with-a-large-gasp-while-watching-a-film.webm',mo:'Talent Show'},
  //   {name:'https://ak1.picdn.net/shutterstock/videos/19408801/preview/stock-footage-man-put-a-case-in-the-trunk-movie-style.webm',mo:'Road'},
  // ]
}


  // playVideo(event){
  //   console.log(event.target.children[0].children[0].children[0])
  //   // this.demoVideo = event.target.children[0].children[0].children[0];
  //   this.demoVideo.nativeElement.play();
  // }
  // stopVideo(){
  //   this.demoVideo.nativeElement.pause();
  // }
}
