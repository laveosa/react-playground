import { EApiUrl } from '../../../consts/paths/EApiUrl.ts';
import { fromFreetestapiToUserModel } from '../../convertors/UserModelConvertor.ts';

class Freetestapi_ApiService {
  static getUsers() {
    const path = `${EApiUrl.FREETESTAPI_BASE_URL}${EApiUrl.USERS}`;

    return fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log('FREETESTAPI: ', data);
        return fromFreetestapiToUserModel(data);
      })
      .catch((error) =>
        console.error(
          `Error to fetch users from "freetestapi" source, error: ${error}`
        )
      );
  }
}

export default Freetestapi_ApiService;
