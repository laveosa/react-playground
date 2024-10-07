import { EApiUrl } from '../../../consts/paths/EApiUrl.ts';

class Freetestapi_ApiService {
  static getUsers() {
    const path = `${EApiUrl.FREETESTAPI_BASE_URL}${EApiUrl.USERS}`;

    return fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log('FREETESTAPI: ', data);
        return data;
      })
      .catch((error) => console.error(error));
  }
}

export default Freetestapi_ApiService;
