import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() message: string = 'Hello from child';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  viewChildMessage: string = "View child message from child";

  ngOnInit(): void {
  }

  sendMessage(value: any) {
    this.message = value;
    this.messageEvent.emit(value);
  }
}
