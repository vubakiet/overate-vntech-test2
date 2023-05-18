import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { UserInsertDTO } from './dto/UserInsert.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('getUsers')
  async getUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post('insertUser')
  async insertUser(@Body() user: UserInsertDTO): Promise<Users> {
    return this.usersService.insertUser(user);
  }
}
