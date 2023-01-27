import './App.css';
import Navbar from './components/Navbar/Navbar';
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Carousal from './components/Carousal/Carousal';
import BankImage from "./components/BankImage/BankImage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoriesList />
      <Carousal />
      <BankImage />
    </div>
  );
}

export default App;
