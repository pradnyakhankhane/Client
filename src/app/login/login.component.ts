import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  products = [];
  constructor(private service : LoginService) {
    this.getProduct();
   }

  ngOnInit() {
  }

  getProduct(){
    this.service.getProduct().subscribe(response=>{
      this.products=response.json();
      alert('added');
    })

  }

}
