import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  items: any;
  moviesUrl:any;
  showUrl :any;
  cwatch: any;
  jumbo:any;

  constructor() { }

  ngOnInit() {
    this.items = [1,2,3,4,5,6,6,6,6,6];
    this.jumbo ={name:'https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.webm',show:'Blue Planet'};
    this.cwatch = [
      {name:'https://ak3.picdn.net/shutterstock/videos/4750643/preview/stock-footage-horror-zombie-undead-scary-halloween-fast-paced-shot-combination-of-multiple-shots-and-cg-elements.webm',mo:'Death Gate'},
      {name:'https://ak8.picdn.net/shutterstock/videos/27267148/preview/stock-footage-horror-scene-screaming-man-face-scary-evil-many-faces-devil-spiritual-exorcism-close-up-top-view.webm',mo:'American  Horror Story'},
      {name:'https://ak8.picdn.net/shutterstock/videos/23299498/preview/stock-footage-uryupinsk-russia-january-gameplay-game-console-sega-genesis-mortal-kombat-retro.webm',mo:'Fight Night'},
      {name:'https://ak8.picdn.net/shutterstock/videos/8639878/preview/stock-footage-young-man-with-muscled-body-training-martial-arts-goju-ryu-karate-do-in-silhouette.webm',mo:'Katate Kid'},
      {name:'https://ak2.picdn.net/shutterstock/videos/21549772/preview/stock-footage-gingerbread-man-dancers-d-animation-of-funny-hot-and-sweet-cookie-boy-dancing-for-holiday-and.webm',mo:'Dacing Stars'},
  ]
    this.moviesUrl = [
      {name:'https://ak7.picdn.net/shutterstock/videos/19001497/preview/stock-footage-friends-playing-basketball-at-park-overhead-shot-of-tip-off.webm',mo:'Basketball'},
      {name:'https://ak7.picdn.net/shutterstock/videos/27940027/preview/stock-footage-a-dark-zombie-with-red-eyes-entered-the-room-an-abandoned-house-with-a-monster-inside-in-black-and.webm',mo:'Zombie'},
      {name:'https://ak5.picdn.net/shutterstock/videos/4926755/preview/stock-footage-bristol-september-break-dancing-b-boy-jam-competition-long-sequence-september-in.webm',mo:'Dancing'},
      {name:'https://ak8.picdn.net/shutterstock/videos/28860478/preview/stock-footage-young-man-at-the-movie-theatre-reacts-with-a-large-gasp-while-watching-a-film.webm',mo:'Talent Show'},
      {name:'https://ak1.picdn.net/shutterstock/videos/19408801/preview/stock-footage-man-put-a-case-in-the-trunk-movie-style.webm',mo:'Road'},
    ]
    this.showUrl = [
      {name:'https://ak6.picdn.net/shutterstock/videos/13465346/preview/stock-footage-silhouettes-of-carioca-brazilians-playing-altinho-beach-football-at-sunset-on-ipanema-beach-in-rio.webm',mo:'Beach'},
      {name:'https://ak5.picdn.net/shutterstock/videos/1007692705/preview/stock-footage-mr-tv-headcool-man-dancing-with-a-television-as-a-head-the-tv-is-has-video-static-and-noise.webm',mo:'Horror story'},
      {name:'https://ak7.picdn.net/shutterstock/videos/16281067/preview/stock-footage-stunt-girl-in-a-fiery-explosion-slow-motion-beautiful-girl-stunt-runs-across-the-field-through.webm',mo:'Kings'},
      {name:'https://ak7.picdn.net/shutterstock/videos/16508437/preview/stock-footage--s-zombie-movie-concept-bmovie-or-horror-movie-see-my-other-zombie-clips.webm',mo:'Walking Dead'},
      {name:'https://ak3.picdn.net/shutterstock/videos/5156663/preview/stock-footage-shadow-of-a-hand-striking-with-a-knife.webm',mo:'Scream'},
    ]
  }

}
