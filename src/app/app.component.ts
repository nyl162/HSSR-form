import { Component } from '@angular/core';
import { ToDolist } from './components/to-doform.component'
import { Moment, max } from 'moment';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDo';
  index: number = 0;

  MasterToDoList: ToDolist[] = [];

  AddListItem(newItem: ToDolist){
    console.log('App Form Event received ---', newItem);
    console.log('MasterList Length ---', this.MasterToDoList.length);
    
    if(this.MasterToDoList.length<1){
      this.index = 0;
    }else{
      
      this.index = Math.max.apply(Math, this.MasterToDoList.map(function(o) { return o.taskID; }))
    }
    newItem.taskID = this.index + 1;
    console.log('Final Index ', this.index + 1);
    this.MasterToDoList.push(newItem);
  }
}
