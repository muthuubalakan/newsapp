
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, map } from 'rxjs/operators';
import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  clckedId: number;
  @Output() searchKeyword: EventEmitter<any> = new EventEmitter();

  url: string = "/api/news";

  constructor(private http: HttpClient,) { }

  setKeyword(keyword) {
    this.searchKeyword.emit(keyword);
  }

  getKeyword() {
    return this.searchKeyword;
  }

  setClickedId(id:number){
    this.clckedId = id;
  }

  getClickedId(){
    return this.clckedId;
  }

  getNewsFeed(): Observable<any []>{
    return this.http.get<any[]>(this.url);
  }

  getNewsDetail(id: number): Observable<any []>{
    const url = `${this.url + "/" + id}`
    return this.http.get<any[]>(url);
  }

  getHeadlines(): Observable<any []>{
    const url = `${this.url + "/" + "?q=headlines"}`
    return this.http.get<any[]>(url);
  }

  getRelatedNews(query:string): Observable<any []>{
    const url = `${this.url + "/" + "?q=" + query}`
    return this.http.get<any[]>(url);
  }
}
