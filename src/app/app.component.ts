import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="parent-content" >
    <div class="counter">{{counter}}</div>
    <button class="btn" (click)="increment()">increment from parent</button>
    <app-child [(counter)]="counter"></app-child>
    <app-child [counter]="counter" (counterChange)="counter=$event"></app-child>
    <app-child [counter]="counter" (counterChange)="onCounterChange($event)"></app-child>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter = 0;

  increment() {
    this.counter++;
  }

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}

@Component({
  selector: 'app-child',
  template: `
  <div class="conteiner">
    <div class="counter">{{counter}}</div>
    <button class="btn" (click)="increment()">increment from child</button>
  </div>
  `,
  styleUrls: ['./app.component.scss']
  
})
export class ChildComponent {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  increment() {
    this.counterChange.emit(++this.counter);
  }

}