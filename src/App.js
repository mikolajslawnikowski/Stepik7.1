import React from 'react';
import './style.css';
import JSXRules from './components/JSXRules';
import FancyTable from './components/FancyTable';
import Multiple from './components/Multiple';

export default function App() {
  return (
    <div>
      <JSXRules text={'siema'} />
      <FancyTable n={7} />
      <Multiple name={'imie nazwisko'} number={11} />
    </div>
  );
}
