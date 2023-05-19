import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getUserById(id: string): Promise<Users> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid User Id');
    }
    const user = this.userModel.findById(id);

    if (!user) {
      console.log('not found');

      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUserById(id: string, user: Users): Promise<Users> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid User Id');
    }
    return this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async deleteUserById(id: string): Promise<Users> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid User Id');
    }
    const user = this.userModel.findByIdAndDelete(id);

    if (!user) {
      console.log('not found');

      throw new NotFoundException('User not found');
    }

    return user;
  }
}
