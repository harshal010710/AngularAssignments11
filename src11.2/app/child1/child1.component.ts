import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberService]
})
export class Child1Component {

  val : number = 0;

  constructor(private obj:NumberService)
  {
   
  }

  GetValue(v : any)
  {

    this.val = parseInt(v);

  }

  RtnCond() : boolean
  {
    // console.warn("prime");
    return this.obj.ChkPrime(this.val);
  }
}
