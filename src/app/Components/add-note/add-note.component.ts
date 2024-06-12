import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent implements OnInit{
  
  AddNoteForm!: FormGroup

  constructor(private note:NotesService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.AddNoteForm= this.formBuilder.group({
      title:[''],
      desc:['']
    })
  }

  OnAddNote(){
    let data={
      title: this.AddNoteForm.value.title,
      desc: this.AddNoteForm.value.desc
    }

    this.note.addNotes(data).subscribe((response:any)=>{
      console.log(response);
    })
  }

}
