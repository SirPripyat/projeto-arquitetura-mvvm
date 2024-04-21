import { IUser } from '@/interfaces/users/user.interface';

export interface IUserLogin extends Omit<IUser, 'name'> {}
