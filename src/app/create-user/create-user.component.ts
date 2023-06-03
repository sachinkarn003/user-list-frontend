import { Component ,OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  id!: string;
  userDetail: any;
  constructor(private router:Router, private _userService:UserServiceService){

  }
  ngOnInit(){
    
  }
  user: { firstName: string, lastName: string, email:string, phone:string } = {firstName: '',lastName:'',  email: '',  phone: ''};

  submitForm() {
    this._userService.createuser(this.user).subscribe((data:any)=>{
      alert('User created');
    });
    setTimeout(() => {
    this.router.navigate(['/']);
    }, 2000);
  }
}
