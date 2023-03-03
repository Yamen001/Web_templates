import logo from './logo.svg';
import './App.css';
import TourCard from './componets/TourCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import SearchAppBar from './componets/AppBar';
import data from './data.json'

function App() {
  console.log(data);
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }} >
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
