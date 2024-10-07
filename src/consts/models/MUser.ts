import { EGender } from '../enums/EGender.ts';

export interface MUser {
  id: string;
  name: string;
  familyName?: string;
  age?: number;
  sex?: EGender;
}
