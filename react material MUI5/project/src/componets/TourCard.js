import Paper from '@mui/material/Paper';
import { Grid, Rating } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/system';
import { AccessTime } from '@mui/icons-material';
import { createTheme ,ThemeProvider } from '@mui/material';

const theme = createTheme(
    {
        components:{
            MuiTypography:{
                variants:[
                    {
                        props:{
                            variant:"body2"
                        },
                        style:{
                            foontSize:11,
                            // backgroundColor:"blue"
                        }
                    },
                    {
                        props:{
                            variant:"body3"
                        },
                        style:{
                            foontSize:9,
                        }
                    },
                ]
            }
        }
    }
)


// xs is like col-3

const TourCard = ({tour})=>{
    return(
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} >
                    <img className='img' src={tour.image}
                    alt='.33' />
                    <Box paddingX={1}>
                        <Typography  variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display:"flex",
                                alignItems:"center"
                            }}>
                                <AccessTime sx={{width:12.5}} />
                                <Typography variant='body2' marginLeft={0.5}>
                                    {tour.duration} hours
                                </Typography>
                        </Box>
                        <Box
                            sx={{
                                display:"flex",
                                alignItems:"center"
                            }}
                            marginTop={3}
                            >
                            <Rating
                                name="read-only"
                                value={tour.rating}
                                readOnly
                                precision={0.5}
                                size="small"
                                />
                            <Typography
                                variant='body2' component="p" marginLeft={0.5}
                            >
                                {tour.raiing}
                            </Typography>
                            <Typography
                                variant='body2' component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant='h6' component="h3" marginTop={1.5}>
                                From C {tour.price}
                            </Typography>   
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}
export default TourCard