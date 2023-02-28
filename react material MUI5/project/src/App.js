import logo from './logo.svg';
import './App.css';
import TourCard from './componets/TourCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container >
        <Grid container spacing={5} >
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
