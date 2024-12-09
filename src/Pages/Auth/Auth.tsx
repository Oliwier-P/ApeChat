import { useState } from "react";

import "./style.scss";

import { Login } from "./Login";
import { Register } from "./Register";

export function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const changeForm = () => {
    setIsLogin(() => !isLogin);
  };

  return (
    <>
      <div>
        {isLogin && (
          <>
            <Login onClick={changeForm} />
          </>
        )}
        {!isLogin && (
          <>
            <Register onClick={changeForm} />
          </>
        )}
      </div>
    </>
  );
}
