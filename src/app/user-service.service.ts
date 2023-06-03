import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  getUserList(){
    return this.http.get('http://localhost:4000/api/v1/users');
  }
  createuser(userData:any){
    return this.http.post('http://localhost:4000/api/v1/users',userData)
  }
  updateUser(id:string,userData:object){
    return this.http.patch('http://localhost:4000/api/v1/users/'+id,userData)
  }
  deleteUser(id:string){
    return this.http.delete(`http://localhost:4000/api/v1/users/${id}`);
  }
  userDetail(id:string){
    return this.http.get(`http://localhost:4000/api/v1/users/${id}`)
  }
  uploadImage(id:string,fileToUpload: any){
    

    return this.http.patch(`http://localhost:4000/api/v1/users/upload/${id}`,fileToUpload)
  }
}
