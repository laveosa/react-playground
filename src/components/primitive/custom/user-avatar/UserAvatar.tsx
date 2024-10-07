import cs from './UserAvatar.module.scss';

function UserAvatar({ avatar }) {
  return (
    <div className={cs['user-avatar-container']}>
      <div dangerouslySetInnerHTML={{ __html: avatar }} />
    </div>
  );
}

export default UserAvatar;
