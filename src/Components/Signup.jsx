import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';

const Signup = () => {
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const validator = (new SimpleReactValidator())
    console.log(error)

    function done(event) {
        event.preventDefault();
        console.log(email, phone, password);
        navigate("/")
    }  if (validator.allValid()) {
        
      } else {
        validator.showMessages();
        setError(validator.errorMessages);
      }

  return (
    <div>
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100 mt-10 mb-10 mx-auto">
        <h1 className="text-3xl font-semibold">Sign Up to your account</h1>
        <a className="text-sm dark:text-gray-400" href="/">
          Or start your free trial
        </a>
        <form onSubmit={done} className="space-y-4">
          <div className="flex flex-col">
            <label for="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={((event) => {
                setError({ ...error, email: "" });
                setEmail(event.target.value)
              })}
              placeholder="Email address"
              className="rounded-t-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ri focus:dark:border-violet-400 focus:ri h-10 mb-10"
            />
             {validator.message("email", email, "required|email")}
              {Error?.email}
            <label for="email" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Your Contect"
              value={phone}
              onChange={((event) => {
                setError({ ...error, phone: ""});
                setPhone(event.target.value)
              })}
              className="rounded-t-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ri focus:dark:border-violet-400 focus:rim h-10 mb-10"
            />
             {validator.message("phone", phone, "required|phone")}
              {Error?.phone}
            <label for="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="text"
              value={password}
              onChange={((event) =>{
                setError({ ...error, password: ""})
                setPassword(event.target.value)
              })}
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ri focus:dark:border-violet-400 focus:ri h-10 mb-10"
            />
             {validator.message("password", password, "required")}
              {Error?.password}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-sm focus:ri focus:dark:border-violet-400 focus:ri accent-violet-400"
              />
              <label for="remember" className="text-sm dark:text-gray-400">
                Remember me
              </label>
            </div>
            <a className="text-sm dark:text-gray-400" href="/">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
