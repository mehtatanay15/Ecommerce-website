import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (state === "login") {
        // Login API call
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });

        if (response.data.success) {
          // Store the auth token in local storage
          localStorage.setItem('token', response.data.authtoken);
          // Redirect or update app state
          alert("Login Successful!");
          navigate('/');
        }
      } else {
        // Signup API call
        const response = await axios.post('http://localhost:5000/api/auth/createuser', {
          name,
          email,
          password
        });

        if (response.data.success) {
          // Store the auth token in local storage
          localStorage.setItem('token', response.data.authtoken);
          // Redirect or update app state
          alert("Signup Successful!");
          navigate('/');
        }
      }
    } catch (err) {
      // Handle error
      if (err.response && err.response.data) {
        setError(err.response.data.error || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={onsubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{state}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Error message */}
      {error && (
        <div className="w-full text-red-500 text-center mb-2">
          {error}
        </div>
      )}

      {state === "sign-up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {state === "login" ? (
          <p className="cursor-pointer">forgot password?</p>
        ) : (
          ""
        )}

        {state === "login" ? (
          <p onClick={() => setState("sign-up")} className="cursor-pointer">
            create account
          </p>
        ) : (
          <p onClick={() => setState("login")} className="cursor-pointer">
            login here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {state === "login" ? "SignIn" : "SignUp"}
      </button>
    </form>
  );
};

export default Login;