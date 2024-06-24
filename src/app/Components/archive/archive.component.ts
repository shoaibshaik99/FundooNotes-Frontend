import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{

  archiveList:any;

  constructor(private notes:NotesService){

  }

  ngOnInit(): void {
    this.OnNotesCreate();
  }

  OnNotesCreate(){   
    this.notes.getAllNotes().subscribe((res:any) => {
      this.archiveList=res.data;
      this.archiveList=this.archiveList.filter((Object:any)=>{
        return Object.isArchived==true && Object.isTrash==false;
      })
      console.log(this.archiveList);     
    })
  }

}

