import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringService]
})
export class Child2Component 
{
  cntt : number = 0;

  constructor(private obj : StringService)
  {
    
  }

  GetString(str1 : any)
  {
    this.cntt = this.obj.RtnCount(str1);
  }

  RtnCnt() : number
  {
    return this.cntt;
  }

}
