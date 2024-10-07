import { EApiUrl } from '../../../consts/paths/EApiUrl.ts';
import { MRandomuserRequest } from '../../../consts/models/MRandomuserRequest.ts';
import { stringifyObjectValues } from '../../helpers/AppHelper.tsx';

class Randomuser_ApiService {
  static getUsers(queryParams: MRandomuserRequest) {
    const params = new URLSearchParams(stringifyObjectValues(queryParams));
    const path = `${EApiUrl.RANDOMUSER_BASE_URL}/?${params}&noinfo`;

    return fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log('playn data: ', data);
        return data;
      })
      .catch((error) => console.error);
  }
}

export default Randomuser_ApiService;
