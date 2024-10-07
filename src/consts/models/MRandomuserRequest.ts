import { EGender } from '../enums/EGender.ts';
import { EApiDataFormat } from '../enums/EApiDataFormat.ts';

export interface MRandomuserRequest {
  results?: number;
  gender?: EGender;
  password?: string;
  format?: EApiDataFormat;
}
