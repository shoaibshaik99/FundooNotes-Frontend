import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrl: './display-all-notes.component.scss'
})
export class DisplayAllNotesComponent implements OnInit{
  @Input() NotesList:any;
  @Output() updateAutoRefresh=new EventEmitter<string>();

  constructor(public dialog:MatDialog){}

  ngOnInit(): void { 
  }

  UpdateNote(note:any){
    const dialogbox=this.dialog.open(UpdateNoteComponent,{
      width: '40%',
      height: 'auto',
      data:note
      })
      dialogbox.afterClosed().subscribe(result => {
      console.log(result);
      this.updateAutoRefresh.emit(result);
      })
  }

  receivedRefershEvent($event:any){
    this.updateAutoRefresh.emit($event);
  }
  




}
