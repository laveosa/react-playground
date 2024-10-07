import Randomuser_ApiService from './Randomuser_ApiService.ts';
import { MRandomuserRequest } from '../../../consts/models/MRandomuserRequest.ts';

class UsersApiService {
  static getUsers(queryParams: MRandomuserRequest) {
    return Promise.all([Randomuser_ApiService.getUsers(queryParams)]);
  }
}

export default UsersApiService;
