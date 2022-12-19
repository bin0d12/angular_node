import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private emplyService: EmployeeService){
  }
  ngOnInit(): void {
 

    // throw new Error('Method not implemented.');
    this.emplyService.getUsers().subscribe(payload => {
      this.users = payload;
    })
    
  }
  title = 'angular_to_node';
  users: any
}
