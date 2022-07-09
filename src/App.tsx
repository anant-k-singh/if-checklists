import React, { useState, useEffect } from 'react';
import { Checklist } from './checklist/checklist';
import { BEFORE_START } from './checklistData';
import './App.css';

function App() {
  return (
    <div>
      <Checklist checklistName="Before Start" listItems={BEFORE_START} />
    </div>
  );
}

export default App;
