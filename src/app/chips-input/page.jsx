"use client";

import { useEffect, useRef, useState } from "react";

export default function ChipsInput() {
  const inputRef = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = localStorage.getItem("chips");
    setList(JSON.parse(getList));
  }, []);

  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(list));
  }, [list]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    const value = inputRef.current?.value?.trim();
    if (!value) return;

    const updatedList = [...list, value];
    //const removeDuplicate = [...new Set(updatedList)];
    const removeDuplicate = updatedList.filter(
      (item, index, self) =>
        index === self.findIndex((i) => i.toLowerCase() === item.toLowerCase())
    );
    setList(removeDuplicate);
    inputRef.current.value = "";
  };

  const handleDelete = (e) => {
    const deleteItem = list.filter(
      (item) => item.toLowerCase() !== e.toLowerCase()
    );
    setList(deleteItem);
  };
  return (
    <>
      <div className="w-2/5 mx-auto py-20">
        <h2 className="text-4xl font-bold text-blue-900 text-center pt-8 pb-12">
          Chips Input
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="w-full text-center">
            <input
              type="text"
              ref={inputRef}
              onKeyDown={handleKeyDown}
              className="text-base text-black h-9 rounded-full w-md border border-solid border-blue-600 px-3"
              placeholder="Type a chips and press Enter"
            />
          </div>
        </form>
        <div className="flex flex-cols p-4">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                className="bg-blue-100 border border-solid border-blue-500 rounded-full py-2 px-4 m-2 inline-block relative"
              >
                {item}
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="w-5 h-5 rounded-full bg-red-500 text-center text-white text-sm absolute -top-2 -right-2 cursor-pinter"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
