/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/models/entities/User';
import { UserRepository } from 'src/models/repositories/USerRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      return await this.userRepository.updateUser(user);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

}
