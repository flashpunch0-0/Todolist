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
    setItemss((olditems) => [...olditems, inputList]);
    const alreadySavedItems = getLocalItems();
    const newArray = [...alreadySavedItems, inputList];
    localStorage.setItem("dhokla", JSON.stringify(newArray));
    clearinputfield();
  };
  const clearinputfield = () => {
    // 👇️ clear input value
    setInputLit("");
  };

  // const deleteItems = (id) => {
  //   console.log("deleted");
  //   setItemss((olditems) => {
  //     return olditems.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  //   // localStorage.setItem("dhokla", JSON.stringify());
  // };
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
      <div className="main_div bg-green-400">
        <div className="center_div bg-green">
          <br />
          <h1 className="text-black">Learning TODO</h1>
          <br />
          <div className="inputandsubmit">
            <input
              type="text"
              placeholder="add a task"
              value={inputList}
              onChange={itemEvent}
            />
            &nbsp;
            <button onClick={listofItems}> + </button>
          </div>

          <ol>
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
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
