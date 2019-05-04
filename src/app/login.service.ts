import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   url :string = 'http://localhost:4000/product'
  constructor(private http : Http) { }
  
  getProduct(){
    return this.http.get(this.url);
  }
}
