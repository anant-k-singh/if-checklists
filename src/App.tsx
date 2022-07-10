import { Checklist } from "./checklist/checklist";
import {
  AFTER_LANDING,
  APPROACH,
  BEFORE_PUSHBACK,
  BEFORE_START,
  BEFORE_TAKEOFF,
  BEFORE_TAXI,
  CLIMB,
  CRUISE,
  PARKING,
} from "./checklistData";
import "./App.css";

function App() {
  return (
    <div>
      <Checklist checklistName="Before Start" listItems={BEFORE_START} />
      <Checklist checklistName="Before Pushback" listItems={BEFORE_PUSHBACK} />
      <Checklist checklistName="Before Taxi" listItems={BEFORE_TAXI} />
      <Checklist checklistName="Before Takeoff" listItems={BEFORE_TAKEOFF} />
      <Checklist checklistName="Climb" listItems={CLIMB} />
      <Checklist checklistName="Cruise" listItems={CRUISE} />
      <Checklist checklistName="Approach" listItems={APPROACH} />
      <Checklist checklistName="After Landing" listItems={AFTER_LANDING} />
      <Checklist checklistName="Parking" listItems={PARKING} />
    </div>
  );
}

export default App;
