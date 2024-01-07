import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent {
  sum : number = 0;

  sub : number = 0;

  constructor(private obj : ArithmeticService)
  {
    this.sum = obj.Addition();

    this.sub = obj.Substraction();
  }
}
