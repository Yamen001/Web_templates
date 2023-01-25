import './styles/App.css';
import Navbar from './Components/nav';
import Landing from './Components/landing';
import Products from './Components/products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Products />
      {/* <Team /> */}
      {/* <Gallart /> */}
    </div>
  );
}

export default App;
