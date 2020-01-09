import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  jumbo:any;
  showUrl:any;
  constructor() { }

  ngOnInit() {
    this.jumbo = {name:'https://ak8.picdn.net/shutterstock/videos/1026664778/preview/stock-footage-fire-line-in-super-slow-motion-iso-lated-on-black-shooting-with-high-speed-cinema-camera-in-k.webm',show:'Fire Tower'};

    this.showUrl = [
      {name:'https://ak6.picdn.net/shutterstock/videos/13465346/preview/stock-footage-silhouettes-of-carioca-brazilians-playing-altinho-beach-football-at-sunset-on-ipanema-beach-in-rio.webm',mo:'Beach'},
      {name:'https://ak5.picdn.net/shutterstock/videos/1007692705/preview/stock-footage-mr-tv-headcool-man-dancing-with-a-television-as-a-head-the-tv-is-has-video-static-and-noise.webm',mo:'Horror story'},
      {name:'https://ak7.picdn.net/shutterstock/videos/16281067/preview/stock-footage-stunt-girl-in-a-fiery-explosion-slow-motion-beautiful-girl-stunt-runs-across-the-field-through.webm',mo:'Kings'},
      {name:'https://ak7.picdn.net/shutterstock/videos/16508437/preview/stock-footage--s-zombie-movie-concept-bmovie-or-horror-movie-see-my-other-zombie-clips.webm',mo:'Walking Dead'},
      {name:'https://ak3.picdn.net/shutterstock/videos/5156663/preview/stock-footage-shadow-of-a-hand-striking-with-a-knife.webm',mo:'Scream'},
    ]
  }

}
