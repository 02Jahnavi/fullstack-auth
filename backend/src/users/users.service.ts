import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  email: string;
  password: string;
  roles: string[];
};

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(userData: { email: string; password: string; roles?: string[] }): Promise<User> {
    const user: User = {
      id: this.users.length + 1,
      email: userData.email,
      password: userData.password, // in production, hash this!
      roles: userData.roles || ['user'],
    };
    this.users.push(user);
    return user;
  }
}
