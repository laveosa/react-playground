import { GenderEnum } from "../enums/GenderEnum.ts";

export interface UserModel {
  id: string;
  name: string;
  familyName?: string;
  age?: number;
  sex?: GenderEnum;
}
