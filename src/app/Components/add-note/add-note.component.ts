import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';
import { emit } from 'node:process';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent implements OnInit{
  
  AddNoteForm!: FormGroup

  @Output() refreshAddEvent = new EventEmitter<string>();

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
      description: this.AddNoteForm.value.desc
    }

    this.note.addNotes(data).subscribe((response:any)=>{
      console.log(response);
      this.refreshAddEvent.emit(response);
    })
  }

}
