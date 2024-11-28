import { useState } from "react";
import "./LoginStyle.scss";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickLogin = () => {};

  return (
    <>
      <div className="login_container">
        Login
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={onClickLogin}>LOGIN</button>
        <br />
        <label>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          Remember me?
        </label>
        <br />
        <a href="/register">Register</a>
      </div>
    </>
  );
}
