import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, default: '' },
  email: { type: String, default: '' },
  age: { type: Number, default: 0 },
});

// Check if the model has already been compiled before compiling it
const User = (models.User) || model('User', userSchema);

export default User;
