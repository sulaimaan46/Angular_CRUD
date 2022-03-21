import { Component } from '@angular/core';
import { CrudService } from './crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';
  todoList:any = [];

  constructor(private crudService: CrudService){}

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.crudService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title:`Some Todo`
    }
    this.crudService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  editTodo(todo: any){
    let data = {
      id: new Date().getTime(),
      title:`Some Todo`
    }
    this.crudService.update(todo.id,data).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  deleteTodo(id: any){
    this.crudService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }
}
