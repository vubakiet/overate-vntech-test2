import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Users {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  address: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
