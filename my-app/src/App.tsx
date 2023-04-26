import React from 'react';
import './App.css';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';

function App() {
  return (
    <div className="App">
      <div>
        < Header />
      </div>
      <div>
        <TranslationInput label='Input Translation' />
      </div>

    </div>
  );
}

export default App;
