import React from "react";
import { DataContext } from "../hoc/DataProvider";

export const useData = () => {
  return React.useContext(DataContext);
};
