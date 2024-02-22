import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { todo } from 'src/typeorm/entitiy/todo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
