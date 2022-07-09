import React from 'react';
import { useChecklist } from 'react-checklist';

interface Props {
  checklistName: string;
  listItems: string[];
}

export function Checklist(props: Props) {
  const listItems = props.listItems.map((listItem, idx) => {
    return {
      label: listItem,
      _id: `${props.checklistName}-${idx}`,
    };
  });

  const { handleCheck, checkedItems } = useChecklist(listItems, {
    key: '_id',
    keyType: 'string',
  });

  return (
    <ul>
      <h2>{props.checklistName}</h2>
      {listItems.map((v, i) => (
        <li key={i}>
          <input
            type="checkbox"
            data-key={v._id} // 3
            onChange={handleCheck} // 4
            checked={checkedItems.has(v._id)} // 5
          />
          <label>{v.label}</label>
        </li>
      ))}
    </ul>
  );
}
