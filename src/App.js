import logo from './logo.svg';
import './App.css';
import Animation from './components/Animation.js';
import MyForm from './components/ProgramForm.js';

function App() {
  return (
    <div class="Form-div">
      <MyForm />
      <div class="Animation-div">
        <Animation />
      </div>
    </div>

  );
}

export default App;
