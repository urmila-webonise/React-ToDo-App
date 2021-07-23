import React from "react";

const ListTask = ({ items, handleRemove }) => {
  return (
    <>
      <h1>List Of My Tasks</h1>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              {item.name}
              <button
                onClick={() => handleRemove(item)}
                style={{
                  backgroundColor: "red",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListTask;
