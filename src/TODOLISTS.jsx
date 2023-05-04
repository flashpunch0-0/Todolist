import React from "react";
import "./App.css";
const TODOLISTS = (props) => {
  // props are immutable
  return (
    <>
      <div className=" grid md:grid-cols-5 ">
        <li className=" flex ">
          <div className="md:col-span-1 ">
            {/* presents id */}
            {props.id + 1}
          </div>
          <div className=" md:col-span-3 justify-center">
            {/* presents text */}
            {props.text}
          </div>
          <div className=" md:col-span-1 justify-end">
            {/* presents delete button */}
            <button
              aria-hidden="true"
              onClick={() => {
                props.onSelect(props.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
          </div>
        </li>
        {/* <div className="text-white flex   mt-10   justify-around items-center">
          <li>
            <span className=" justify-start "> {props.id + 1}</span>
            <span className="ml-10 text-2xl">{props.text}</span>
          </li>

          <i
            className="bi bi-x-lg   "
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </div> */}
      </div>
    </>
  );
};
export default TODOLISTS;
