import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddlistService {

  list =[];

  constructor() { }

  addMovieOrShowToList(data:any){
    this.list.push(data);
  }

  getMovieOrShowToList(){
    return this.list;
  }
}
