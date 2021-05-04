import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
@Input() note;
@Output() noteDelete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onclick(note){
this.noteDelete.emit(note);
}

}
