import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() name?: string;
  @Output() reset = new EventEmitter<string>();

  addName(value: string){
    this.reset.emit(value)
  }
}
