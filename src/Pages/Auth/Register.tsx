import { useState } from "react";

import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

type RegisterProps = {
  onClick: () => void;
};

export function Register({ onClick }: RegisterProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onClickRegister = async () => {
    const validateEmail = (email: string): boolean => {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,32}$/;
      return passwordRegex.test(password);
    };

    const newErrors: { [key: string]: string } = {};

    // Check for empty fields
    for (const key in formData) {
      if (formData[key as keyof typeof formData] === "") {
        newErrors[key] = `${key} is required.`;
        setErrors(newErrors);
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validation checks
    if (!/^[A-Za-z]+$/.test(formData.username)) {
      newErrors.firstName = "Username should contain only letters.";
      setErrors(newErrors);
      return;
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
      setErrors(newErrors);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      setErrors(newErrors);
      return;
    }
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be 8-32 characters long, include 1 uppercase letter, and 1 special character.";
      setErrors(newErrors);
      return;
    }

    const res = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    await setDoc(doc(db, "users", res.user.uid), {
      username: formData.username,
      email: formData.email,
      id: res.user.uid,
      blocked: [],
    });

    await setDoc(doc(db, "userchats", res.user.uid), {
      chats: [],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="app_title">ApeChat</div>
        <div className="auth_container register_container">
          <input
            className="custom_input"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          {errors.username && <span className="input_error">{errors.username}</span>}
          <input
            className="custom_input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <span className="input_error">{errors.email}</span>}
          <input
            className="custom_input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <span className="input_error">{errors.password}</span>}
          <input
            className="custom_input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="input_error">{errors.confirmPassword}</span>
          )}
          <button className="custom_button" onClick={onClickRegister}>
            REGISTER
          </button>
          <div className="form_link" onClick={onClick}>
            Already have an account?
          </div>
        </div>
      </div>
    </>
  );
}
