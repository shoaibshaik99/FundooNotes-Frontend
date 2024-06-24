import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-add-and-display-notes',
  templateUrl: './add-and-display-notes.component.html',
  styleUrl: './add-and-display-notes.component.scss'
})
export class AddAndDisplayNotesComponent implements OnInit{
  NotesArray:any;
  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.OnAddNote();
  }

  OnAddNote(){
    this.notes.getAllNotes().subscribe((response:any)=>{
      console.log(response);
      this.NotesArray=response.data;
      console.log(this.NotesArray);
      this.NotesArray=this.NotesArray.filter((object:any)=>{
        return object.isArchived==false && object.isTrash==false;
      })
      this.NotesArray.reverse();
    })
  }

  AddEvent($event: any){
    console.log('note refreshed after creating notes');
    this.OnAddNote();
  }
  
  receivedRefreshEventFromDisplaytoGetall($event:any){
    console.log('note refreshed after update');
    this.OnAddNote();
  }
}
