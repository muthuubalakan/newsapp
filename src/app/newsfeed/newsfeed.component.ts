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
  keyword: string;

  constructor(private mainService: ApiServiceService) { }

  ngOnInit() {
    this.getQueriedNews();
    this.mainService.getNewsFeed().subscribe(resp=>{
      this.fetchHeadlines();
      this.allNews = resp;
      this.data = this.allNews.pop();
    });

  }

  getQueriedNews(){
    this.mainService.getKeyword().subscribe(keyword=>{
      this.keyword = keyword;
      this.getNews(this.keyword);
    });

  }
  
  private getNews(keyword){
  this.mainService.getRelatedNews(keyword).subscribe(resp=>{
    this.allNews = resp;
    this.data = this.allNews.pop();
    this.fetchHeadlines();
  });
  }

  fetchHeadlines(){
    this.mainService.getHeadlines().subscribe(resp=>{
      this.headlines = resp;
    });
  }

}
