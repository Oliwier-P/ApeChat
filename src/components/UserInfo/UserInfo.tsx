import { useUserStore } from "../../lib/userStore";
import "./style.scss";

export function UserInfo() {
  const { currentUser }: any = useUserStore();

  return (
    <>
      <div className="user_info">
        <div className="avatar">{currentUser!.username!.substring(0, 1)}</div>
        <div className="username">{currentUser!.username!}</div>
      </div>
    </>
  );
}
