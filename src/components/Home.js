import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchThingRandom,
  fetchThingTreasure,
} from "../store/actions/thingActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = () => {
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch(fetchThingRandom());
  };
  const handleTreasure = () => {
    dispatch(fetchThingTreasure());
  };

  const user = useSelector((state) => state.authReducer.user);

  return (
    <>
      <h3 className="text-center mt-2">Welcome To Treasure Hunt</h3>
      <ToastContainer autoClose={2000} />
      <div
        className="container d-flex justify-content-center"
        style={{ height: "85vh", alignItems: "center" }}
      >
        <div>
          <Link to="/random">
            <button
              type="button"
              class="btn btn-outline-info btn-lg mx-2"
              onClick={handleRandom}
            >
              Random
            </button>
          </Link>
          <Link to="/treasure">
            <button
              type="button"
              class="btn btn-outline-info btn-lg mx-2"
              onClick={handleTreasure}
              disabled={!user ? true : false}
            >
              Treasure
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
