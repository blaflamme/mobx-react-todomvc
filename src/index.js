import 'todomvc-common';
import {TodoModel} from './stores/todoModel';
import ViewModel from './stores/viewModel';
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';

var todoModel = new TodoModel('mobx-react-todomvc');
var viewModel = new ViewModel();

ReactDOM.render(
	<TodoApp todoModel={todoModel} viewModel={viewModel}/>,
	document.getElementById('todoapp')
);
