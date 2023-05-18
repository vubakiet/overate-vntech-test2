import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop()
  _id: string;

  @Prop()
  Name: string;

  @Prop()
  Gender: number;

  @Prop()
  Address: string;

  @Prop()
  Created_at: string;

  @Prop()
  Updated_at: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
