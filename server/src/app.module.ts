import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from './typeorm/entitiy/todo';
import { getway } from './socket/socket.getway';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', 
    password: 'beti',  
    database: 'todoo',
    entities: [todo],
    synchronize: true,
  }),TodoModule],
  providers:[getway] // this is for websoket connection 
})
export class AppModule {}
