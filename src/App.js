// import logo from './logo.svg';
import './App.css';
import FoodData from './resources/FoodData';
import Hooks from './component/hooks';

function App() {
  return (
    <div className="App">
      <Hooks test={FoodData} />
    </div>
  );
}

export default App;
