import { Component, OnInit,ViewChild, Output , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moment } from 'moment';

export interface ToDolist {
  taskL: string;
  priorityLevel: string;
  dueL: string;
  dueM: Moment;
  taskID: number;
  taskSTAT: string;
}

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})

export class ToDoformComponent implements OnInit {

  priorityList: string[] = ["High","Medium","Low"];
  
  @ViewChild('ToDoFormEntry')
  ToDoFormEntry : NgForm ;

  @Output()
  AddToList = new EventEmitter<ToDolist>() 

  constructor() { }

  ngOnInit() {
  }

  FormInputAction(){
    console.log(this.ToDoFormEntry.value.due.format('MMM DD'));
    const EventExport: ToDolist = {  taskL: this.ToDoFormEntry.value.task,
      priorityLevel: this.ToDoFormEntry.value.priorityLevel,
      dueL: this.ToDoFormEntry.value.due.format('MMM DD'),
      dueM: this.ToDoFormEntry.value.due,
      taskID: 0,
      taskSTAT: 'new'
    }
    this.AddToList.next(EventExport);
    this.ToDoFormEntry.reset();
  }

}
