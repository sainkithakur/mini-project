import { useState } from "react";

const Register = () => {

    const [password , setPassword] = useState()
    const [email , setEmail] = useState()


  return (
    <>
      <form className="regs">
        <div >
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control mt-3 mb-3"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div >
          <label for="exampleInputPassword1" >Password  </label>
          <input
            type="password"
            class="form-control  mt-3 mb-3"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" class="btn bg-secondary  mt-5 mb-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
