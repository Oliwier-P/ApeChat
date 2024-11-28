import { useState } from "react";

import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function Register() {
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
        return;
      }
    }

    // Validation checks
    if (!/^[A-Za-z]+$/.test(formData.username)) {
      newErrors.firstName = "Username should contain only letters.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be 8-32 characters long, include 1 uppercase letter, and 1 special character.";
    }

    if (Object.keys(newErrors).length > 0) {
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
      <div className="register_container">
        Login
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        <button onClick={onClickRegister}>REGISTER</button>
      </div>
    </>
  );
}
