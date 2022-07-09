import React from "../../_snowpack/pkg/react.js";
import {useChecklist} from "../../_snowpack/pkg/react-checklist.js";
export function Checklist(props) {
  const listItems = props.listItems.map((listItem, idx) => {
    return {
      label: listItem,
      _id: `${props.checklistName}-${idx}`
    };
  });
  const {handleCheck, checkedItems} = useChecklist(listItems, {
    key: "_id",
    keyType: "string"
  });
  return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("h2", null, props.checklistName), listItems.map((v, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    "data-key": v._id,
    onChange: handleCheck,
    checked: checkedItems.has(v._id)
  }), /* @__PURE__ */ React.createElement("label", null, v.label))));
}
