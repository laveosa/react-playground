import { useEffect, useState } from 'react';

import cs from './App.module.scss';
import { IUser } from './consts/interfaces/IUser.ts';
import UsersApiService from './utils/services/api/UsersApiService.ts';
import UserAvatar from './components/primitive/custom/user-avatar/UserAvatar.tsx';

const FAKE_USERS: IUser[] = [];

function App() {
  const [users, setUsers] = useState<any[]>(null);

  useEffect(() => {
    UsersApiService.getUsers({
      results: 100,
    }).then((res) => {
      console.log('ALL RESULTS: ', res);
      setUsers(res[0]);
    });
  }, []);

  return (
    <div className={cs.appContainer}>
      <div>
        {users &&
          users.map((user) => (
            <div key={user.id} className={cs['user-card']}>
              <UserAvatar avatar={user.picture} />
              <p>{user.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
