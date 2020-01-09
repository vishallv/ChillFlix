import { Component, OnInit } from '@angular/core';
import { AddlistService } from '../addlist.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  mylist:any;
  constructor(private _list : AddlistService) { }

  ngOnInit() {
    this.mylist = this._list.getMovieOrShowToList()
  }

}
