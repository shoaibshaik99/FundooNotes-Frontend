import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrl: './display-all-notes.component.scss'
})
export class DisplayAllNotesComponent implements OnInit{
  @Input() NotesList:any;

  constructor(public dialog:MatDialog){}


  ngOnInit(): void {
    
  }
}
