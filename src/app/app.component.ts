import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-2';
users : any;
  constructor(private userData: UsersDataService)
  {
      userData.users().subscribe((data) => {
      console.warn("data",data);
      this.users=data});
      
  }

// Getting API data

DataUser = [
  {name:'shaziya', age:'20'},
  {name:'saniya', age:'20'},
  {name:'tarannum', age:'19'},
  {name:'kausar', age:'19'},
  {name:'abdullah', age:'18'}
]
}
