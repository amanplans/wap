import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@wap/data';

@Component({
  selector: 'wap-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}