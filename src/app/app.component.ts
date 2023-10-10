import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { customer } from './customer.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  about!: string;
  message: string = "";

  constructor(
    private custSvc: CustomerService,
    // add more services here
    ) {}
    ngOnInit(): void {

      
      this.message = "";
      //this.custSvc.get(id).subscribe({
        //adding keys
        //next: (res) => {
         // console.log(customer);
        //},
        //error: (err) => {
         // if(err.status === 404){
         //   this.message = "Customer not found";
         // } else {
          //   console.error(err);
          //}
       // }
      //});
    }
}
