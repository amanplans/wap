import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './../../../../data-access/src/lib/data-access';

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
