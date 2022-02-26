import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  message: string = 'Hello from parent';
  constructor() { }

  ngOnInit(): void {
  }

  recieveMessage($event: any) {
    this.message = $event;
  }
}
