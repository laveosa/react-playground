import { EApiUrl } from '../../../consts/paths/EApiUrl.ts';

class Dummyjson_Api_Service {
  static getUsers() {
    const path = `${EApiUrl.DUMMYJSON_BASE_URL}${EApiUrl.USERS}`;
    return fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log('DUMMYJSON: ', data);
        return data;
      })
      .catch((error) =>
        console.error(
          `Error to fetch users from "dummyjson" source, error: ${error}`
        )
      );
  }
}

export default Dummyjson_Api_Service;
