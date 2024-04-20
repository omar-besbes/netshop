import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Role } from 'src/auth/enums/role';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: SchemaTypes.ObjectId, required: false })
  id: string;

  @Prop({ type: SchemaTypes.String, required: true })
  username: string;

  @Prop({ type: SchemaTypes.String, required: true })
  email: string;

  @Prop({ type: SchemaTypes.String, required: true })
  password: string;

  @Prop({ type: SchemaTypes.Date, required: true })
  dateCreated: number;

  @Prop({ type: SchemaTypes.Boolean, required: true })
  isEmailVerified: boolean;

  @Prop({ type: [{ type: SchemaTypes.String }], required: true })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
