import './App.css';
import Autofill from './Components/Autofill';

function App() {
  return (
    <div className="App">
      <Autofill
        options={
          [
            "Omkar",
            "Aniket",
            "Atharva",
            "Lambo",
            "Elon",
            "Musk"
          ]
        }
      />
    </div>
  );
}

export default App;
