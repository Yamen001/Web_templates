import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';


// xs is like col-3

const TourCard = ()=>{
    return(
        <Grid item xs={3}>
            <Paper elevation={3} square >hello world</Paper>
        </Grid>
    )
}
export default TourCard