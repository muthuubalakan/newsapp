import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'newsapp';
  keyword: string;

  constructor(private mainService: ApiServiceService) { }

  search(){
    this.mainService.setKeyword(this.keyword);
    console.log("Called", this.keyword)
  }
}
