import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;
  constructor(private httpService:HttpService) {this.token=localStorage.getItem("token")}

  

  addNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postMethodReset('https://localhost:5001/api/Notes/CreateNote',reqData, true, header);
  }

  getAllNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getMethod('https://localhost:5001/api/Notes/GetAUserNotes', true, header);
  }

  trashNotes(reqdata:any){
    console.log(reqdata)
    let header ={
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer '+this.token
    })
    }
    return this.httpService.putMethod('https://localhost:5001/api/Notes/TrashToggle?noteId='+reqdata.noteId, {}, true, header);
    }



  archiveNotes(reqdata:any){
    console.log(reqdata)
    let header ={
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer '+this.token
    })
    }
    return this.httpService.putMethod('https://localhost:5001/api/Notes/ArchiveToggle?noteId='+reqdata.noteId, {}, true, header);
    }
}
