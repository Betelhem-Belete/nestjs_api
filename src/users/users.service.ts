import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { CreateUserParams } from '../utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,  //to interact with thw database inject the typeorm folder into services
    ) {}
    
    findUsers(){

    }
    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({ 
            ...userDetails, 
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }
}
