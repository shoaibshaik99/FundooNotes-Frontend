import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit{
  trashList:any;

  constructor(private notes:NotesService){

  }

  ngOnInit(): void {
    this.TrashNotes();
  }

  TrashNotes(){   
    this.notes.getAllNotes().subscribe((res:any) => {
      this.trashList=res.data;
      this.trashList=this.trashList.filter((Object:any)=>{
        return Object.isTrash==true;
      });
      console.log(this.trashList);
    })
  }

  Restore(note:any){
    let data={
      noteId:note.noteId
    }
    console.log(data);
    this.notes.trashNotes(data).subscribe((response:any) =>{
      console.log(response)
      this.TrashNotes();
  })
  }
}
