import "./style.scss";

type FriendInfoProps = {
  username: string;
};

export function FriendInfo({ username }: FriendInfoProps) {
  return (
    <>
      {username && (
        <div className="friend_container">
          <div className="avatar">{username.substring(0, 1)}</div>
          <div className="username">{username}</div>
        </div>
      )}
    </>
  );
}
