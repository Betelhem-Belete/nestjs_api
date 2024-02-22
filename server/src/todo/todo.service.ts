import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { todo } from 'src/typeorm/entitiy/todo';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(todo)private todoRepository : Repository<todo>){}
  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.todoRepository.create({
      ...createTodoDto,
      createdAt: Date()
    }
    )
    return this.todoRepository.save(todo)
  }

  async findAll() {
    const data = await this.todoRepository.find({
      select:{
        title: true,
        createdAt: true,
        id:true
      }
    })
    return data;
  }

  async findOne(id: number) {
    const data = await this.todoRepository
    .createQueryBuilder("todo")
    .where("todo.id = :id", { id })
    .getOne()
    return data;
}


  update(id: number, updateTodoDto: UpdateTodoDto) {
    const updatetodo = this.todoRepository.createQueryBuilder()
    .update(todo)
    .set({title: updateTodoDto.title})
    .where("id = :id",{id})
    .execute()
    return updatetodo;
  }

  remove(id: number) {
    const deletetodo = this.todoRepository.createQueryBuilder()
    .delete()
    .from(todo)
    .where('id = :id',{id})
    .execute()
  }
}
