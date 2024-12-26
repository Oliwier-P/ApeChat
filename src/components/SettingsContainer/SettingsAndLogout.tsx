import "./style.scss";
import settings from "./../../assets/settings.svg";

export function SettingsAndLogout() {
  return (
    <>
      <div className="settings_logout_container">
        <img src={settings} alt="settings" className="settings" />
        <button className="logout">Logout</button>
      </div>
    </>
  );
}
