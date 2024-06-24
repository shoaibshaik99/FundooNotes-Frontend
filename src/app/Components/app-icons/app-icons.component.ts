import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.scss'
})
export class AppIconsComponent implements OnInit{
  @Input() notesObject:any;
  @Output() refreshEvent= new EventEmitter<string>();

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
      this.refreshEvent.emit(response);
  })
  }

  onArchive(){
    let data={
      noteId:this.notesObject.noteId
    }
    console.log(data);
    this.notes.archiveNotes(data).subscribe((response:any) =>{
      console.log(response)
      this.refreshEvent.emit(response);
    })
  }

  colorArray: Array<any> = [
    {code: '#ffffff', name: 'white'},
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow'},
    { code: '#ADFF2F', name: 'greenyellow'},
    {code: '#B0C4DE', name: 'LightSteelBlue'},
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine'},
    { code: '#FFE4C4', name: 'Bisque'},
    { code: '#Cecece', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown'},
    { code: '#D3D3D3', name: 'grey' },
  ];

  selectColor(colors:any){
    let reqData={
      colour:colors.name,
      notesId:this.notesObject.noteId
    }
    this.notes.notesColor(reqData).subscribe((response:any) =>{
      console.log(response)
      this.refreshEvent.emit(response);
    })

  }
}
