import { Component } from '@angular/core';
import { ToDolist } from './components/to-doform.component'
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDo';
  

  MasterToDoList: ToDolist[] = [];

  AddListItem(newItem: ToDolist){
    console.log('App Form Event received ---', newItem);
    this.MasterToDoList.push(newItem);
  }
}
