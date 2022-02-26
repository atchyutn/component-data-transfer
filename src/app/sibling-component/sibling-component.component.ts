import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling-component',
  templateUrl: './sibling-component.component.html',
  styleUrls: ['./sibling-component.component.css']
})
export class SiblingComponentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  message: string = 'message in the sibling component';

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

}
