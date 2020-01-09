import { Component, OnInit,Input, ViewChild, ElementRef, } from '@angular/core';
import { AddlistService } from '../addlist.service';


@Component({
  selector: 'app-movi',
  templateUrl: './movi.component.html',
  styleUrls: ['./movi.component.css']
})
export class MoviComponent implements OnInit {

  @Input() url:any;
  @Input() name :string;
  @ViewChild('allt',{ static: true }) demoVideo?: ElementRef;
  check: boolean;

  constructor(private _list : AddlistService) { }

  ngOnInit() {
    this.check=false
  }
  addTolist(url:any,name:any){
    let data = {name:url,
                mo:name};
    
    this._list.addMovieOrShowToList(data);            
    
  }

  playVideo(event){
    
    // console.log(event.target.children[0].children[0].children[0])
    // this.demoVideo = event.target.children[0].children[0].children[0];
    this.demoVideo.nativeElement.play();
  }
  stopVideo(){
    
    this.demoVideo.nativeElement.pause();
  }
  checkOn(){
    this.check = true
  }
  checkOff(){
    this.check = false;
  }


}
