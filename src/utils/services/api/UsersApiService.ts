import { MRandomuserRequest } from '../../../consts/models/MRandomuserRequest.ts';
import Randomuser_ApiService from './Randomuser_ApiService.ts';
import Freetestapi_ApiService from './Freetestapi_ApiService.ts';
import Dummyjson_Api_Service from './Dummyjson_Api_Service.ts';

class UsersApiService {
  static getUsers(queryParams: MRandomuserRequest) {
    return Promise.all([
      Freetestapi_ApiService.getUsers(),
      Dummyjson_Api_Service.getUsers(),
      Randomuser_ApiService.getUsers(queryParams),
    ]);
  }
}

export default UsersApiService;
