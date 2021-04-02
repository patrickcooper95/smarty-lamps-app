import React, { useEffect, useState } from 'react';
import './App.css';
import Animation from './components/Animation.js';
import { ProgramForm } from './components/ProgramForm.js';

function App() {

  return (
    <div class="Form-div">
      <ProgramForm />
      <div class="Animation-div">
        <Animation />
      </div>
    </div>

  );
}

export default App;
