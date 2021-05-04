import { Component, OnInit } from '@angular/core';
import { Note } from "../../note";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  localItem:string;
notes:Note[];
  constructor() {
    this.localItem= localStorage.getItem("notes");
    if(this.localItem==null){
      this.notes=[];
    }
  else{
    this.notes=JSON.parse(this.localItem)
  }
   }

  ngOnInit(): void {
  }

deletenote(note){
  const index = this.notes.indexOf(note)
this.notes.splice(index,1)
  console.log(note);
localStorage.setItem("notes",JSON.stringify(this.notes));
}


addNote(note){
 console.log(note);
 this.notes.push(note);
localStorage.setItem("notes",JSON.stringify(this.notes));
}

}
