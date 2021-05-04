import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Note  } from "src/app/note";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
title:string;
des:string;
@Output() noteAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onsubmit(){
  const note={
    title: this.title,
    des: this.des,

  }
  this.noteAdd.emit(note);
}

}
