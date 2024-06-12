import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.scss'
})
export class AppIconsComponent implements OnInit{
  @Input() notesObject:any;

  constructor(private notes:NotesService){}

  ngOnInit(): void {
  }

  onDelete() {
    let data={
      noteId:this.notesObject.noteId
    }
    console.log(data);
    this.notes.trashNotes(data).subscribe((response:any) =>{
      console.log(response)
      //this.refreshEvent.emit(response);
  })
  }
  

  onArchive(){
    let data={
      noteId:this.notesObject.noteId
    }
    console.log(data);
    this.notes.archiveNotes(data).subscribe((response:any) =>{
      console.log(response)
      //this.refreshEvent.emit(response);
  })
  }
}
