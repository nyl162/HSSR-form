import { Component, OnInit, Input } from '@angular/core';
import { ToDolist } from './to-doform.component';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})


export class ToDolistComponent implements OnInit {

  @Input()
  CompomentToDoList:ToDolist[] = [];

  constructor() { }

  ngOnInit() {
  }

}
