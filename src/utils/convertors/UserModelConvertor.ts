import { detect } from 'gender-detection';

import { IUser } from '../../consts/interfaces/IUser.ts';
import { EGender } from '../../consts/enums/EGender.ts';
import AvatarService from '../services/AvatarService.ts';

export function fromFreetestapiToUserModel(items: any[]): IUser[] | null {
  if (!items || items.length === 0) {
    return null;
  }

  return items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      age: item.age,
      gender: detect(item.name) as EGender,
      picture: AvatarService.generateHumanAvatar(item.name),
      email: item.email,
      phone: item.phone,
    };
  });
}

// export function fromRandomuserToUserModel(model: any): IUser {
//   const result: IUser = {};
//   return result;
// }
