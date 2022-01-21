import './App.css';
import Autofill from './Components/Autofill';

function App() {
  return (
    <div className="App">
      <Autofill
        options={
          [
            "Ford Mustang",
            "Ferrari",
            "Porsche",
            "Bugatti Veyron",
            "Aston Martin",
            "Tesla 3"
          ]
        }
      />
    </div>
  );
}

export default App;
