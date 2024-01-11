import { Component , OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  //  userId:any;
  constructor(private router: ActivatedRoute){

  }
ngOnInit(): void {
    // console.warn("user id is ", this.router.snapshot.paramMap.get('id'));
    // this.userId = this.router.snapshot.paramMap.get('id');
}

// Getting data for API 

@Input() item:{name:string,age:string}={name:'',age:''};
}
