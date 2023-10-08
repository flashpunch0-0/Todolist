import React, { useEffect, useState } from "react";
import TODOLISTS from "./TODOLISTS";
import "./App.css";

const App = () => {
  const [inputList, setInputLit] = useState("");
  //niche wale isliyw hai taki ham inputs ko array mein store karle items aur setItemss hai yeh
  const [Items, setItemss] = useState([]);

  // to just change the usestate buy using event.target.value initially usestate = buyapple
  // using below metohd changes it what we want just changes does not add
  //  what happens is it changes the current value of setinputlist which changes the current value of inputlist

  // to get data from localstorage
  const getLocalItems = () => {
    const savedTODOS = localStorage.getItem("dhokla");
    if (savedTODOS) {
      return JSON.parse(savedTODOS);
    } else {
      return [];
    }
  };

  const itemEvent = (event) => {
    setInputLit(event.target.value);
  };

  const listofItems = (e) => {
    e.preventDefault();
    if (!inputList) {
      alert("PLEASE FILL THE REQUIRED TASK");
    } else {
      setItemss((olditems) => [...olditems, inputList]);
      const alreadySavedItems = getLocalItems();
      const newArray = [...alreadySavedItems, inputList];
      localStorage.setItem("dhokla", JSON.stringify(newArray));
      clearinputfield();
    }
  };
  const clearinputfield = () => {
    // 👇️ clear input value
    setInputLit("");
  };
  // // local storage and you can only pass in string format

  const deleteItems = (id) => {
    const deleted = Items.filter((arrElem, index) => index !== id);
    setItemss(deleted);
    localStorage.setItem("dhokla", JSON.stringify(deleted));
  };

  useEffect(() => {
    const alreadySavedList = getLocalItems();
    setItemss(alreadySavedList);
  }, []);

  return (
    <>
      <body
        className=" 
       text-white font-serif bg-gray-900  w-screen h-screen  "
      >
        {/* content wrapper */}
        <div className="flex items-center justify-center h-screen  ">
          <div className="  md:w-96   scale-90 md:scale-100 ">
            <div className=" font-extralight tracking-wider uppercase  md:w-full">
              <h1 className=" p-5 h-12 md:h-16 mt-4 md:mt-8 flex items-center  justify-start    bg-indigo-400 ">
                <svg
                  class="h-8 w-8 text-indigo-700 stroke-current "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className=" ml-8">TASK LIST - KRATIK</p>
              </h1>
            </div>

            {/* for ordered list */}
            <div className="mt-4 md:mt-10 overflow-auto text-white rounded-lg shadow-lg mb-4 md:mb-6 h-96 bg-gray-800 ">
              {/* <li>{inputList}</li> */}
              {/* mapping function */}

              {Items.map((allitemsvalue, index) => {
                return (
                  <TODOLISTS
                    key={index}
                    id={index}
                    text={allitemsvalue}
                    onSelect={deleteItems}
                  />
                );
              })}
            </div>

            {/* for input */}
            <div className=" flex w-full bg-indigo-400  items-center justify-center ">
              <div className=" p-4 h-12 md:h-16">
                <form onSubmit={listofItems}>
                  <input
                    className=" text-center  text-white md:w-64  w-24 border-2 border-white rounded-md bg-indigo-400  "
                    type="text"
                    placeholder="add a task"
                    value={inputList}
                    onChange={itemEvent}
                  />

                  <button
                    type="submit"
                    className="ml-2    align-middle  "
                    // onClick={listofItems}
                    // onSubmit={listofItems}
                  >
                    <svg
                      className="w-10 h-10"
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
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* <form
                className="flex flex-0.6  bg-blacksecondary border  border-bordercolor rounded-full "
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="outline-none text-white ml-2 pr-5 pl-5 md:pl-0   w-44 md:w-64 lg:w-[500px]  border-none font-medium bg-transparent"
                  placeholder="Search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-bordercolor  w-[40px] md:w-[60px] h-6 md:h-10 flex items-center justify-center  rounded-r-3xl  "
                >
                  <AiOutlineSearch size={24} />
                </button>
              </form> */}
            </div>
          </div>
        </div>

        {/* <div className=" w-2/12"></div> */}
      </body>
    </>
  );
};
export default App;
