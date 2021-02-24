import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

export default function Navbar() {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLoggout = () => {
    dispatch(logout(history));
  };
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Treasure Hunt
        </Link>
        <div>
          {!user ? (
            <>
              <Link
                to="/signin"
                type="button"
                class="btn btn-outline-success mx-2"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                type="button"
                class="btn btn-outline-success mx-2"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span>{user.username}</span>
              <button
                type="button"
                class="btn btn-outline-danger mx-2"
                onClick={handleLoggout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
