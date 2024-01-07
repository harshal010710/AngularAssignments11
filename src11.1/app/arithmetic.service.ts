import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { 

  }

  Addition() : number
  {
    return 10+20;
  }

  Substraction() : number{
    return 30-5;
  }
}
