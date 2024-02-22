import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from './typeorm/entitiy/todo';
import { getway } from './socket/socket.getway';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'tati', // Change the username to 'tati'
    password: '123',  // Change the password to '123'
    database: 'todoo',
    entities: [todo],
    synchronize: true,
  }),TodoModule],
  providers:[getway] // this is for websoket connection 
})
export class AppModule {}
