import { Component ,OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _userService:UserServiceService){}
  userList: any;
  ngOnInit() {
    this._userService.getUserList().subscribe((data:any)=>{
      this.userList = data.data.userList;
      console.log(this.userList);
    })
    // Add your initialization logic here
  }
  deleteUser(id: string){
    this._userService.deleteUser(id).subscribe(()=>{
      alert('User Deleted');
      window.location.reload()
    });
  }
}
