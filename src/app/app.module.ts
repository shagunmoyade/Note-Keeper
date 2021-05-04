import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotesComponent } from './MyComponnent/notes/notes.component';
import { NoteListComponent } from './MyComponnent/note-list/note-list.component';
import { AddNoteComponent } from './MyComponnent/add-note/add-note.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteListComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
