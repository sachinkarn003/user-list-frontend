import { Component,OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id!: string ;
  userDetail:any ;
  img!:any;
  constructor(private router:Router ,private sanitizer: DomSanitizer,private route:ActivatedRoute, private _userService:UserServiceService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
    this._userService.userDetail(this.id).subscribe((data:any)=>{
      this.userDetail = data.data;
      console.log('data ', this.userDetail);
      if(this.userDetail.image){
      this.img = this.sanitizer.bypassSecurityTrustUrl('http://localhost:4000/uploads/'+this.userDetail.image)
      }
    })
  }
  changePicture(){
    this.router.navigate(['/update/'+this.id]);
  }

}
