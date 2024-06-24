import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrl: './update-note.component.scss'
})
export class UpdateNoteComponent implements OnInit{

  title:any;
  description:any;
  id:any;
  //color:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogbox: MatDialogRef<UpdateNoteComponent>, private notes:NotesService){
    this.title=data.title,
    this.description=data.description,
    this.id=data.noteId
    //this.color=data.Colour
  }

  ngOnInit(): void {
  }

  CloseDialog(){
    let reqData={
      title:this.title,
      desc:this.description,
      // color:this.color
    }
    console.log(this.description)
    this.notes.updateNotes(reqData, this.id).subscribe((response:any)=>{
      console.log(response);
      this.dialogbox.close();
    })
  }

}
