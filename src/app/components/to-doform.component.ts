import { Component, OnInit,ViewChild, Output , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
/*
interface ToDolist {
  taskL: string;
  priorityLevel: string;
}
*/
export class ToDoformComponent implements OnInit {

  priorityList: string[] = ["High","Medium","Low"];
  
  @ViewChild('ToDoFormEntry')
  ToDoFormEntry : NgForm ;

  //@Output()
  //AddToList = new EventEmitter<ToDolist>() 

  constructor() { }

  ngOnInit() {
  }

  FormInputAction(){
    console.log(this.ToDoFormEntry.value);

  }

}
