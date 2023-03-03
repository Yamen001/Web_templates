import React from 'react'
import TourCard from '../componets/TourCard';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import data from '../data.json'
function Home() {
    return (
        <div className="App">
            <Container sx={{ marginY: 5 }} >
                {data.map((city) => (
                    <>
                        <Typography
                            variant="h4"
                            component="h2"
                            marginTop={5}
                            marginBottom={3}
                        >
                            Top {city.name} Tours
                        </Typography>

                        <Grid container spacing={5} >
                            {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
                        </Grid>
                    </>

                ))}



            </Container>
        </div>
    )
}
export default Home
