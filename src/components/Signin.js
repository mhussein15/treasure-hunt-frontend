import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../store/actions/authActions";
import { useState } from "react";

export default function Signin() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(history);
    dispatch(signin(data, history));
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-item-center"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label for="inputPassword5" class="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <label for="inputPassword5" class="form-label">
          Password
        </label>

        <input
          type={password ? "password" : "text"}
          name="password"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            onClick={() =>setPassword(!password)}
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <input
          type="submit"
          className="form-control btn btn-success"
          value="Sign In"
        />
      </form>
    </div>
  );
}
