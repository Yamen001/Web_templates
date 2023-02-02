import './styles/App.css';
import Navbar from './Components/nav';
import Landing from './Components/landing';
import Products from './Components/products';
import Sec1 from './Components/section1';
import Team from './Components/team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Products />
      <Sec1/>
      <Team />
      {/* <Gallart /> */}
    </div>
  );
}

export default App;
