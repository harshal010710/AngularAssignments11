import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  RtnCount(str : string) : number
  {
    let count : number = 0;
    let i : number = 0;
    
    while(i < str.length)
    {
      if(str[i] <='Z' && str[i] >= 'A')
      {
        count++;
      }
      i++
    }

    return count;
  }
}
