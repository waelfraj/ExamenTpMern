/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { User } from 'src/models/entities/User';
import { UserService } from 'src/models/services/UserService';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAll')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post('/add')
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Patch('/update/:id') // PATCH /users/:id
  async updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    user.id = id; // Set the ID from the URL parameter
    return await this.userService.updateUser(user);
  }

  @Delete('/delete/:id') // DELETE /users/:id
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
