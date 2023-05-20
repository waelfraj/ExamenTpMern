/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/models/entities/user';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.createQueryBuilder('user').getMany();
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return await this.save(user);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      return await this.save(user);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      await this.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
