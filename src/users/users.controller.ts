import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
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

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Users> {
    return this.usersService.getUserById(id);
  }

  @Put('updateUserById/:id')
  async updateUserById(
    @Param('id') id: string,
    @Body() user: UserInsertDTO,
  ): Promise<Users> {
    return this.usersService.updateUserById(id, user);
  }

  @Delete('deteleUserById/:id')
  async deleteUserById(@Param('id') id: string): Promise<Users> {
    return this.usersService.deleteUserById(id);
  }
}
