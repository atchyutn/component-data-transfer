import { ChildComponentComponent } from './../child-component/child-component.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  @ViewChild(ChildComponentComponent) child: any;

  constructor() { }

  message: string = 'Hello from parent';
  viewChildMessage: string = "View Child message from parent";

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.viewChildMessage = this.child.viewChildMessage;
  }


  recieveMessage($event: any) {
    this.message = $event;
  }


}
