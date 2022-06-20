import React from 'react';
import './App.css';

const Tasks = (task) => {
  return <li><input type="checkbox" /> {task}</li>
};

function App() {
  return (
    <main>
      <ul>
        { Tasks('Acordar') }
        { Tasks('Tomar café da manhã') }
        { Tasks('Momento descontração') }
        { Tasks('Almoço') }
        { Tasks('Momento Estudos') }
        { Tasks('Jantar') }
        { Tasks('Momento descontração') }
        { Tasks('Ir dormir') }
      </ul>
    </main>
  );
}

export default App;
