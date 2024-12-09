import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

type LoginProps = {
  onClick: () => void;
};

export function Login({ onClick }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chats");
    } catch (err) {
      alert("Email or password is incorrect");
    }
  };

  return (
    <>
      <div className="container">
        <div className="app_title">ApeChat</div>
        <div className="auth_container login_container">
          <input
            className="custom_input"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="custom_input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="div_checkbox_remember">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="checkmark"></span>
            Remember me?
          </div>
          <button className="custom_button" onClick={onClickLogin}>
            LOGIN
          </button>
          <div className="form_link" onClick={onClick}>
            Create new account
          </div>
        </div>
      </div>
    </>
  );
}
