import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");

  const onsubmit = async (e) => {
    e.preventDefault();
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
      {state === "login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="email"
        required
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="password"
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
