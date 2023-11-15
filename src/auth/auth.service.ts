/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '../auth/types/User';

@Injectable()
export class AuthService {
  testUser: User;

  constructor() {
    this.testUser = {
      id: 1,
      name: 'juani',
      password: 'test',
    };
  }

  validateUser(username: string, password: string): any {
    if (this.testUser.name == username && this.testUser.password == password) {
      return {
        userId: this.testUser.id,
        name: this.testUser.name,
      };
    }
  }
}