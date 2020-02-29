import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
dataList: any;
  
  constructor(private httpClient:HttpClient){
    }

  ngOnInit() {
    this.getEventList();

  }
  getEventList() {
    let url='http://localhost:8080/event/info/list';
    this.httpClient.get(url).subscribe(data => {
       this.dataList=data;
       console.log(this.dataList);
    });
    

    }
  }



