import { MRandomuserRequest } from '../../../consts/models/MRandomuserRequest.ts';
import Randomuser_ApiService from './Randomuser_ApiService.ts';
import Freetestapi_ApiService from './Freetestapi_ApiService.ts';

class UsersApiService {
  static getUsers(queryParams: MRandomuserRequest) {
    return Promise.all([
      Randomuser_ApiService.getUsers(queryParams),
      Freetestapi_ApiService.getUsers(),
    ]);
  }
}

export default UsersApiService;
