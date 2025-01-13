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

  const onClickLogin = async (e: React.FormEvent) => {
    e.preventDefault();

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
        <form className="auth_container login_container" onSubmit={onClickLogin}>
          <input
            className="custom_input"
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="custom_input"
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="password"
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
          <button className="custom_button" type="submit">
            LOGIN
          </button>
          <div className="form_link" onClick={onClick}>
            Create new account
          </div>
        </form>
      </div>
    </>
  );
}
