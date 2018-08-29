import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
export class ToDoformComponent implements OnInit {

  priorityList: string[] = ["High","Medium","Low"];
  
  @ViewChild('ToDoFormEntry')
  ToDoFormEntry : NgForm ;

  constructor() { }

  ngOnInit() {
  }

  FormInputAction(){
    console.log(this.ToDoFormEntry.value);
  }

}
