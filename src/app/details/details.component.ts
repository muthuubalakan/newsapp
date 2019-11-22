import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newsId: any;
  data:any;
  relatednews:any;

  constructor(private router: ActivatedRoute, 
      private mainService: ApiServiceService) { }

  
  ngOnInit() {
    this.router.params.subscribe(param=>{
      this.newsId = param;
      this.fetchDetail(this.newsId.id);
    });
  }

  fetchDetail(id:number){
    this.mainService.getNewsDetail(id).subscribe(response=>{
      this.data = response;
      this.getRelated(this.data.category);
    })
  }

  getRelated(query:string){
    this.mainService.getRelatedNews(query).subscribe(response=>{
      this.relatednews = response;
    });
  }

  reload(){
    window.location.reload();
  }
}
