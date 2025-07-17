import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dice } from '../dice/dice';

@Component({
  selector: 'app-inputs',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Dice
  ],
  standalone: true,
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss'
})
export class Inputs implements OnInit {

  @Output() quantity: number = 1;
  @Output() sides: number = 6;
  showDiceWarning = false;
  showSidesWarning = false;
  dice!: FormGroup;
  error: string="";

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.dice = this.formBuilder.group({
      qty: [1, [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      sides: [6, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  rollADie() {
    if(this.dice.get('qty')?.value > 0 && this.dice.get('qty')?.value <= 4){
      this.quantity = this.dice.get('qty')?.value;
    }else{
      this.quantity = 1;
      this.sides = 6
      this.error = "The quantity of dice should be between 0 and 4"
    }
    
    if(this.dice.get('sides')?.value >= 6 && this.dice.get('sides')?.value <= 20){
      this.sides = this.dice.get('sides')?.value;
    }else{
      this.quantity = 1;
      this.sides = 6;
      this.error = "The quantity of sides should be between 6 and 20"
    }
    
  }

}
