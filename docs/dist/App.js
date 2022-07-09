import React from "../_snowpack/pkg/react.js";
import {Checklist} from "./checklist/checklist.js";
import {BEFORE_START} from "./checklistData.js";
import "./App.css.proxy.js";
function App() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Checklist, {
    checklistName: "Before Start",
    listItems: BEFORE_START
  }));
}
export default App;
