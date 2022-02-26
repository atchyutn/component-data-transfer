import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() message: string = 'Hello from child';
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(value: any) {
    this.message = value;
  }
}
