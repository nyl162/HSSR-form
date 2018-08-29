import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-doform',
  templateUrl: './to-doform.component.html',
  styleUrls: ['./to-doform.component.css']
})
export class ToDoformComponent implements OnInit {

  priorityList: string[] = ["High","Medium","Low"];
  
  @ViewChild('Entry')
  Entry : NgForm ;

  constructor() { }

  ngOnInit() {
  }

  FormInputAction(){
    console.log(this.Entry.task);
  }

}
