import { useEffect, useState } from 'react';

import cs from './App.module.scss';
import { MUser } from './consts/models/MUser.ts';
import UsersApiService from './utils/services/api/UsersApiService.ts';
import { EGender } from './consts/enums/EGender.ts';

const FAKE_USERS: MUser[] = [];

function App() {
  const [users, setUsers] = useState<any[]>(null);

  useEffect(() => {
    UsersApiService.getUsers({
      results: 100,
    }).then((res) => {
      console.log('ALL RESULTS: ', res);
    });
  }, []);

  return (
    <div className={cs.appContainer}>
      <div>
        {/*{users &&*/}
        {/*  users.map((user) => (*/}
        {/*    <div key={user.name.title}>*/}
        {/*      <p>{user.name.title}</p>*/}
        {/*    </div>*/}
        {/*  ))}*/}
      </div>
    </div>
  );
}

export default App;
