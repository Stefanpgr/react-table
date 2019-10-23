import React, { useState, createContext } from "react";

import "./index.css";
export const TableContext = createContext();

export const TableProvider = props => {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Amaka",
      lastName: "Okoye",
      birthday: "10/06/1997",
      age: 23,
      hobby: "Reading"
    },
    {
      id: 2,
      firstName: "James",
      lastName: "Adeyemi",
      birthday: "11/07/1996",
      age: 24,
      hobby: "Writing"
    }
  ]);

  return (
    <div>
      <TableContext.Provider value={[data, setData]}>
        {props.children}
      </TableContext.Provider>
    </div>
  );
};
