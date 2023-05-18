import { Injectable } from '@nestjs/common';
import { Users } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private userModel: mongoose.Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    const users = await this.userModel.find();
    return users;
  }

  async insertUser(user: Users): Promise<Users> {
    const res = await this.userModel.create(user);
    return res;
  }
}
