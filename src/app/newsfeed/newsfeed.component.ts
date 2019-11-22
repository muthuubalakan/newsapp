import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})


export class NewsfeedComponent implements OnInit {
  allNews: any[];
  headlines: any[];
  data: any;

  constructor(private mainService: ApiServiceService) { }

  ngOnInit() {
    this.mainService.getNewsFeed().subscribe(resp=>{
      this.fetchHeadlines();
      this.allNews = resp;
      this.data = this.allNews.pop();
    });

  }

  fetchHeadlines(){
    this.mainService.getHeadlines().subscribe(resp=>{
      this.headlines = resp;
    });
  }

}
