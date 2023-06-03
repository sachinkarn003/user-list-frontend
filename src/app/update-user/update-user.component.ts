import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  id!: string ;
  userDetail:any ;
  selectedFile: any;
  basicDetail:boolean = true;

  
  formData = new FormData();
  constructor(private route:ActivatedRoute, private router:Router, private _userService:UserServiceService){

  }
  // user:  = {firstName: '',lastName:'',  email: '',  phone: ''};

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
    this._userService.userDetail(this.id).subscribe((data:any)=>{
      this.userDetail = data.data;
      console.log(this.userDetail);
    })

  }

  submitForm(){
   this._userService.updateUser(this.id,this.userDetail).subscribe((data:any)=>{
    alert(data.data);
    this.router.navigate(['/']);
   })
  }

  
  handleFileInput(files: any) {
    this.selectedFile = files.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      this.formData = new FormData();
      this.formData.append('image', this.selectedFile, this.selectedFile.name);
      // Replace 'YOUR_UPLOAD_URL' with your actual API endpoint for handling image upload
       this._userService.uploadImage(this.id, this.formData).subscribe((data:any)=>{
          console.log(data);
    })
    }
  }
  basicInfo(){
    this.basicDetail=true;
  }
  picture(){
    this.basicDetail=false;
  }

}
