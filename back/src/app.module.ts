/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/USerController';
import { UserRepository } from 'src/models/repositories/USerRepository';
import { UserService } from 'src/models/services/UserService';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlConfig } from './config/config';
import { User } from "./models/entities/user";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MysqlConfig,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, UserRepository],
})
export class AppModule {}
