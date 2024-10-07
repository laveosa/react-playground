import { EGender } from '../enums/EGender.ts';

export interface IUser {
  id: string;
  name: string;
  username?: string;
  age?: number;
  gender?: EGender;
  picture?: string;
  email?: string;
  phone?: string;
}
