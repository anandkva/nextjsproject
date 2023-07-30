import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  age: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, default: '' },
  email: { type: String, default: '' },
  age: { type: Number, default: 0 },
});

// Check if the model has already been compiled before compiling it
const User = models.User || model<IUser>('User', userSchema);

export default User;
