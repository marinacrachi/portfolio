import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  mostra1 = false;
  mostra2 = false;

  constructor() { }

  ngOnInit() {
  }

  mostra(div){
    switch(div){
      
      case 1:
      {
        this.mostra1 = true;
        this.mostra2 = false;
      }
      break;
      
      case 2:
      {
        this.mostra1 = false;
        this.mostra2 = true;
      }
      break;

      default:
      {
        this.mostra1 = false;
        this.mostra2 = false;
      }
      break;
    } 
  }

}
