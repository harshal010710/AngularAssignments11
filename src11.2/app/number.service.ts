import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
  
    let i: number = 2;
  
    while (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        return false;
      }
  
      i++;
    }
  
    return true;
  }
  
}
