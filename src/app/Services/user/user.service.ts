import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  register(data: any){
    let header ={head:new HttpHeaders({
      'Content-type':'application/json'
    })};
    return this.httpService.postMethod('https://localhost:5001/api/Users/Register',data,false,header)
  }

  Login(data:any){
    let header ={head:new HttpHeaders({
      'Content-type':'application/json'
    })};
    return this.httpService.postMethod('https://localhost:5001/api/Users/Login',data,false,header);
  }

}
