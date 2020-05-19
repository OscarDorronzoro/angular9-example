import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent{

  @Output() add = new EventEmitter();

  addItem(input){
    if(input.value!==''){
      let item = new TodoItem();
      item.description=input.value;
      item.isCompleted=false;
      input.value="";
      input.classList.remove("wrong-input")
      this.add.emit(item);
    }
    else{
      input.classList.add("wrong-input")
    }
  }
}
