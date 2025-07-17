import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  imports: [],
  templateUrl: './dice.html',
  styleUrl: './dice.scss'
})
export class Dice implements OnInit{

  @Input() quantity: number =1;
  @Input() sides: number =6;

    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
